---
name: Netlify email delivery
description: Deployment constraint for transactional email on the Netlify-hosted Decoding the sbOS site.
---

The live Decoding the sbOS site is deployed as a static Netlify site. Transactional email for its public forms must run in a Netlify Function with `RESEND_API_KEY` configured in Netlify; the attached Replit Resend connector cannot authenticate code running on Netlify.

**Why:** Replit connector credentials and identity are injected only into Replit runtimes. Netlify does not inherit them from the workspace or GitHub repository.

**How to apply:** Keep a same-origin `/api` redirect to the Netlify Function for production. When email behavior changes, maintain both the Netlify function and the Replit API route used by workspace preview.