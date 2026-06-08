const RECEIVER_TIMEOUT_MS = Number(process.env.EXTENSION_CLICK_TIMEOUT_MS || 900);

const allowedExtensions = new Set(["focus-blocker", "tab-sorter-pro", "human-doc-typer"]);

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

function header(req, name) {
  const value = req.headers[name.toLowerCase()];
  return Array.isArray(value) ? value[0] : value || "";
}

function getClientIp(req) {
  return (
    header(req, "cf-connecting-ip") ||
    header(req, "x-real-ip") ||
    header(req, "x-forwarded-for").split(",")[0].trim() ||
    "unknown"
  );
}

function getLocation(req) {
  const city = header(req, "x-vercel-ip-city");
  const region = header(req, "x-vercel-ip-country-region");
  const country = header(req, "x-vercel-ip-country");
  return {
    city: decodeURIComponent(city || ""),
    region: decodeURIComponent(region || ""),
    country: decodeURIComponent(country || ""),
  };
}

module.exports = async function handler(req, res) {
  res.setHeader("cache-control", "no-store");

  if (req.method !== "POST") {
    return res.status(405).json({ error: "method_not_allowed" });
  }

  let rawPayload;
  try {
    rawPayload = parseBody(req);
  } catch {
    return res.status(400).json({ error: "invalid_json" });
  }

  const extension = String(rawPayload.extension || "").trim().toLowerCase();
  if (!allowedExtensions.has(extension)) {
    return res.status(422).json({ error: "unknown_extension" });
  }

  const event = {
    extension,
    extension_name: String(rawPayload.extension_name || "").trim(),
    clicked_at: new Date().toISOString(),
    client_timestamp: String(rawPayload.client_timestamp || "").trim(),
    path: String(rawPayload.path || "").slice(0, 120),
    ip: getClientIp(req),
    location: getLocation(req),
    user_agent: String(header(req, "user-agent")).slice(0, 300),
  };

  const receiverUrl = process.env.RECEIVER_EXTENSION_CLICK_URL;
  if (!receiverUrl) {
    return res.status(202).json({ accepted: true, stored: false });
  }

  const headers = {
    "content-type": "application/json",
    "x-forwarded-by": "vercel-extension-click-broker",
  };

  if (process.env.RECEIVER_TOKEN) {
    headers["x-receiver-token"] = process.env.RECEIVER_TOKEN;
  }

  try {
    const response = await fetch(receiverUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(event),
      signal: AbortSignal.timeout(RECEIVER_TIMEOUT_MS),
    });

    return res.status(202).json({ accepted: true, stored: response.ok });
  } catch {
    return res.status(202).json({ accepted: true, stored: false });
  }
};
