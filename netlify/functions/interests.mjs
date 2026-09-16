const notificationEmail = "christian@attunementpsych.com";
const sender =
  process.env.RESEND_FROM_EMAIL ??
  "Decoding the sbOS <christian@attunementpsych.com>";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default async (request) => {
  if (request.method !== "POST") {
    return json(405, { error: "Method not allowed." });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json(400, { error: "Please check the form and try again." });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email =
    typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const message =
    typeof body.message === "string" ? body.message.trim() : "";
  const website =
    typeof body.website === "string" ? body.website.trim() : "";

  if (
    !name ||
    name.length > 120 ||
    !emailPattern.test(email) ||
    email.length > 254 ||
    message.length > 2000
  ) {
    return json(400, { error: "Please check the form and try again." });
  }

  if (website) {
    return json(200, {
      success: true,
      message: "Your interest has been submitted.",
    });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return json(503, {
      error: "The interest form is temporarily unavailable.",
    });
  }

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
    const response = await fetch("https://api.resend.com/emails/batch", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emails),
    });

    if (!response.ok) {
      console.error("Resend rejected interest emails", response.status);
      return json(502, {
        error:
          "We couldn't submit your interest right now. Please try again shortly.",
      });
    }

    return json(200, {
      success: true,
      message:
        "Thank you. Check your inbox for confirmation, and Christian will be in touch.",
    });
  } catch (error) {
    console.error("Failed to send interest emails", error);
    return json(502, {
      error:
        "We couldn't submit your interest right now. Please try again shortly.",
    });
  }
};