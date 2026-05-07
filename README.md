# rithwikbejadi.tech — Portfolio

Personal portfolio for **Sai Rithwik Bejadi** — Backend Engineer, B.Tech AI @ NST'28.  
Live at: [rithwikbejadi.tech](https://rithwikbejadi.tech)

## Stack

- **Framework**: Next.js 16 (static export)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Contact**: EmailJS
- **Deployment**: GitHub Pages via GitHub Actions

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Output is in the `/out` directory (static HTML/CSS/JS).

---

## Environment Variables

Create a `.env.local` file (never commit this):

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

For GitHub Actions deployment, add these as **Repository Secrets** in:  
`Settings → Secrets and variables → Actions`

---

## Deployment

### Option A — GitHub Pages (via GitHub Actions)

1. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically.
2. In your repo: `Settings → Pages → Source: GitHub Actions`.
3. Add EmailJS secrets to `Settings → Secrets and variables → Actions`.

### Option B — Vercel (recommended for custom domain + edge CDN)

1. Import the repo at [vercel.com/new](https://vercel.com/new).
2. Framework: **Next.js** (auto-detected).
3. Add env variables under Project Settings → Environment Variables.
4. Add custom domain `rithwikbejadi.tech` in Project Settings → Domains.

---

## Custom Domain Setup (`rithwikbejadi.tech`)

### GitHub Pages

Add a `CNAME` file to `/public/` with:
```
rithwikbejadi.tech
```

Then in your domain registrar's DNS:
| Type  | Name | Value                        |
|-------|------|------------------------------|
| A     | @    | 185.199.108.153              |
| A     | @    | 185.199.109.153              |
| A     | @    | 185.199.110.153              |
| A     | @    | 185.199.111.153              |
| CNAME | www  | yourusername.github.io       |

Enable HTTPS in: `Settings → Pages → Enforce HTTPS`.

### Vercel

In your domain registrar, add:
| Type  | Name | Value                   |
|-------|------|-------------------------|
| A     | @    | 76.76.21.21             |
| CNAME | www  | cname.vercel-dns.com    |

Vercel handles HTTPS automatically.

---

## Security Headers

Since this is a static export, security headers are configured at the host level:

**Vercel** → `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```
