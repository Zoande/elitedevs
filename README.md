# Unified Project Hub

Single deployable website containing all requested project pages from Zoande and DH4410.

## Included Repositories (Cloned Locally)

- repos/Zoande__BrokerSIM
- repos/Zoande__ahhh
- repos/Zoande__onlineagent
- repos/Zoande__Call-of-idk
- repos/DH4410__Polymarket-Bot
- repos/DH4410__typing-platformer
- repos/DH4410__BrokerSIM
- repos/DH4410__CityBuilder
- repos/DH4410__task-sorter-app
- repos/DH4410__ISRLO-IBDP-subject
- repos/DH4410__sticky-notes-app
- repos/DH4410__studymaster
- repos/DH4410__Swapspot

## Website Structure

- index.html: homepage with all project cards
- projects/*.html: one dedicated page per project
- data/projects.js: shared project metadata/content source
- scripts/home.js: homepage renderer
- scripts/project.js: project page renderer
- styles.css: global styling

## Local Preview

Any static file server works. Example using Node:

```powershell
npx serve .
```

Then open the shown local URL.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import that repository in Vercel.
3. Add required environment variables from `.env.example` in Vercel Project Settings.
4. Deploy.

## Contact Form API Pipeline

The contact page now posts to a same-origin Vercel serverless route:

- `POST /api/contact-broker` (file: `api/contact-broker.js`)

The broker performs request validation and rate limiting, then forwards payloads to the receiver endpoint (Cloudflare tunnel -> laptop/Pi FastAPI service).

Required environment variables:

- `RECEIVER_CONTACT_URL`: public receiver endpoint, for example `https://ingest-dev.yourdomain.com/api/contact`
- `ALLOWED_ORIGINS`: comma-separated origin allowlist, for example `https://elitedevs.org,https://www.elitedevs.org`

Optional environment variables:

- `ALLOWED_ORIGIN`: single-origin fallback (backward compatibility)
- `RECEIVER_TOKEN`: shared token sent as `x-receiver-token`
- `BROKER_RATE_LIMIT_MAX`: requests per IP in one window (default `6`)
- `BROKER_RATE_LIMIT_WINDOW_MS`: rate-limit window duration (default `60000`)
- `RECEIVER_TIMEOUT_MS`: upstream receiver timeout (default `7000`)

## Notes

- This deliverable is a unified project showcase + status tracker.
- Each page documents current implementation state and next delivery steps based on source inspection.

## Developer Dashboard and Extension Redirects

Developer dashboard:

- `GET /developer`
- Prompts for a password only.
- `POST /api/developer-metrics` validates `DEVELOPER_PASSWORD`.
- If `RECEIVER_DEVELOPER_METRICS_URL` is configured, the broker requests metrics from the receiver service.

Tracked Chrome Web Store redirects:

- `/focus-blocker/chromewebstore` -> Focus Blocker (DNR Redirect)
- `/tab-sorter-pro/chromewebstore` -> Tab Sorter Pro
- `/human-doc-typer/chromewebstore` -> HumanDocTyper

Redirect click tracking:

- Browser sends a compact event to `POST /api/extension-click` using `sendBeacon` when available.
- The broker adds server-side IP and coarse Vercel geo headers: country, region, and city when available.
- If `RECEIVER_EXTENSION_CLICK_URL` is configured, the broker forwards the event to the receiver service with a short timeout.

Additional environment variables:

- `DEVELOPER_PASSWORD`: password required for `/developer`.
- `RECEIVER_DEVELOPER_METRICS_URL`: receiver endpoint for dashboard metrics.
- `RECEIVER_EXTENSION_CLICK_URL`: receiver endpoint for extension click events.
- `EXTENSION_CLICK_TIMEOUT_MS`: optional click receiver timeout, default `900`.
- `DEVELOPER_METRICS_TIMEOUT_MS`: optional dashboard receiver timeout, default `5000`.
