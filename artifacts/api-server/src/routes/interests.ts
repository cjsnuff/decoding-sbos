import { ReplitConnectors } from "@replit/connectors-sdk";
import { Router, type IRouter } from "express";
import {
  SubmitInterestBody,
  SubmitInterestResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();
const connectors = new ReplitConnectors();
const notificationEmail = "christian@attunementpsych.com";
const sender = "Decoding the sbOS <christian@attunementpsych.com>";

const submissionWindows = new Map<string, number[]>();
const submissionLimit = 5;
const submissionWindowMs = 60 * 60 * 1000;

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissionWindows.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < submissionWindowMs,
  );

  if (recent.length >= submissionLimit) {
    submissionWindows.set(ip, recent);
    return true;
  }

  recent.push(now);
  submissionWindows.set(ip, recent);
  return false;
}

router.post("/interests", async (req, res): Promise<void> => {
  const parsed = SubmitInterestBody.safeParse(req.body);

  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.message }, "Invalid interest submission");
    res.status(400).json({ error: "Please check the form and try again." });
    return;
  }

  if (parsed.data.website) {
    res.json(
      SubmitInterestResponse.parse({
        success: true,
        message: "Your interest has been submitted.",
      }),
    );
    return;
  }

  const clientIp = req.ip ?? req.socket.remoteAddress ?? "unknown";
  if (isRateLimited(clientIp)) {
    req.log.warn({ clientIp }, "Interest submission rate limit exceeded");
    res.status(429).json({
      error: "Too many submissions. Please wait and try again.",
    });
    return;
  }

  const name = parsed.data.name.trim();
  const email = parsed.data.email.trim().toLowerCase();
  const message = parsed.data.message?.trim() ?? "";
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = message
    ? escapeHtml(message).replaceAll("\n", "<br />")
    : "No additional note provided.";

  const emails = [
    {
      from: sender,
      to: [notificationEmail],
      reply_to: email,
      subject: `New Decoding the sbOS interest from ${name}`,
      text: `New cohort interest\n\nName: ${name}\nEmail: ${email}\n\nNote:\n${message || "No additional note provided."}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #201b16;">
          <h1 style="font-family: Georgia, serif; font-weight: 400;">New cohort interest</h1>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          <p><strong>Note:</strong><br />${safeMessage}</p>
        </div>
      `,
    },
    {
      from: sender,
      to: [email],
      reply_to: notificationEmail,
      subject: "Your interest in Decoding the sbOS",
      text: `Hi ${name},\n\nThank you for your interest in Decoding the sbOS. The next six-week online cohort is planned for January 2027, with exact dates to be announced.\n\nChristian will be in touch as details are finalized. You can reply directly to this email if you have any questions.\n\nChristian Snuffer\nAttunement Psych`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #eee8df; background: #15120f; padding: 40px;">
          <p style="font-family: monospace; text-transform: uppercase; letter-spacing: 0.12em; color: #c88c3a; font-size: 12px;">Decoding the sbOS</p>
          <h1 style="font-family: Georgia, serif; font-size: 34px; font-weight: 400; margin: 20px 0;">Thank you for your interest.</h1>
          <p>Hi ${safeName},</p>
          <p>The next six-week online cohort is planned for <strong>January 2027</strong>, with exact dates to be announced.</p>
          <p>Christian will be in touch as details are finalized. You can reply directly to this email if you have any questions.</p>
          <p style="margin-top: 32px;">Christian Snuffer<br />Attunement Psych</p>
        </div>
      `,
    },
  ];

  try {
    const response = await connectors.proxy("resend", "/emails/batch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emails),
    });

    if (!response.ok) {
      const providerMessage = await response.text();
      req.log.error(
        { status: response.status, providerMessage },
        "Resend rejected interest emails",
      );
      res.status(502).json({
        error:
          "We couldn't submit your interest right now. Please try again shortly.",
      });
      return;
    }

    req.log.info({ email }, "Interest submission emails sent");
    res.json(
      SubmitInterestResponse.parse({
        success: true,
        message:
          "Thank you. Check your inbox for confirmation, and Christian will be in touch.",
      }),
    );
  } catch (error) {
    req.log.error({ err: error }, "Failed to send interest emails");
    res.status(502).json({
      error:
        "We couldn't submit your interest right now. Please try again shortly.",
    });
  }
});

export default router;