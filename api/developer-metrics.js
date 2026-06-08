const METRICS_TIMEOUT_MS = Number(process.env.DEVELOPER_METRICS_TIMEOUT_MS || 5000);

function parseBody(req) {
  if (!req.body) {
    return {};
  }

  if (typeof req.body === "object") {
    return req.body;
  }

  if (typeof req.body === "string") {
    return JSON.parse(req.body);
  }

  if (Buffer.isBuffer(req.body)) {
    return JSON.parse(req.body.toString("utf8"));
  }

  return {};
}

module.exports = async function handler(req, res) {
  res.setHeader("cache-control", "no-store");

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "method_not_allowed",
      message: "Only POST is supported.",
    });
  }

  let body;
  try {
    body = parseBody(req);
  } catch {
    return res.status(400).json({
      error: "invalid_json",
      message: "Request payload must be valid JSON.",
    });
  }

  const configuredPassword = process.env.DEVELOPER_PASSWORD;
  const submittedPassword = String(body.password || "");
  if (!configuredPassword || submittedPassword !== configuredPassword) {
    return res.status(401).json({
      error: "unauthorized",
      message: "Invalid dashboard password.",
    });
  }

  const receiverUrl = process.env.RECEIVER_DEVELOPER_METRICS_URL;
  if (!receiverUrl) {
    return res.status(200).json({
      metrics: {
        total_clicks: 0,
        by_extension: {
          "focus-blocker": 0,
          "tab-sorter-pro": 0,
          "human-doc-typer": 0,
        },
        latest_click: null,
        recent_clicks: [],
      },
    });
  }

  const headers = {
    "content-type": "application/json",
    "x-forwarded-by": "vercel-developer-dashboard-broker",
  };

  if (process.env.RECEIVER_TOKEN) {
    headers["x-receiver-token"] = process.env.RECEIVER_TOKEN;
  }

  try {
    const response = await fetch(receiverUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({ password: submittedPassword }),
      signal: AbortSignal.timeout(METRICS_TIMEOUT_MS),
    });

    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      return res.status(502).json({
        error: "upstream_error",
        message: "Metrics receiver rejected the request.",
      });
    }

    return res.status(200).json(payload);
  } catch {
    return res.status(502).json({
      error: "upstream_unreachable",
      message: "Unable to reach the metrics receiver service.",
    });
  }
};
