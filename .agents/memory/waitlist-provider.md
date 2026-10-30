---
name: Waitlist provider
description: User's standing choice for interest-form submissions.
---

The user now wants interest submissions in Kit, replacing Frank, while preserving the site's existing buttons and popup behavior. Do not reintroduce a custom Resend-powered form.

**Why:** The user explicitly requested switching to their Kit account without changing how signup functions.

**How to apply:** Preserve the existing signup flow when changing providers, and verify the actual provider fields load before replacing the working form.

Keep the site in control of when the signup popup opens. Render Kit inline inside it rather than letting Kit independently schedule or suppress a second popup.

**Why:** Kit's supplied form was configured as a timed modal, which conflicts with the user's requirement that every existing signup button keep opening the form immediately, including repeat opens.

**How to apply:** Preserve Kit's submission destination and confirmation settings, but do not re-enable provider popup timers or repeat-visitor suppression when refreshing its embed.
