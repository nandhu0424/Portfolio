// Utility function to escape HTML special characters for email security
function escapeHtml(str: string): string {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, subject, message, _hp } = body || {};

        // 1. Spam protection via honeypot field
        if (_hp) {
            // Silently succeed so spam bots think they worked without actually sending
            return Response.json(
                { success: true, message: "Message received." },
                { status: 200 }
            );
        }

        // 2. Server-side validation
        const trimmedName = typeof name === "string" ? name.trim() : "";
        const trimmedEmail = typeof email === "string" ? email.trim() : "";
        const trimmedSubject = typeof subject === "string" ? subject.trim() : "";
        const trimmedMessage = typeof message === "string" ? message.trim() : "";

        if (!trimmedName || trimmedName.length < 2 || trimmedName.length > 100) {
            return Response.json(
                { success: false, error: "Full Name must be between 2 and 100 characters." },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!trimmedEmail || !emailRegex.test(trimmedEmail) || trimmedEmail.length > 150) {
            return Response.json(
                { success: false, error: "Please provide a valid email address." },
                { status: 400 }
            );
        }

        if (!trimmedSubject || trimmedSubject.length < 3 || trimmedSubject.length > 200) {
            return Response.json(
                { success: false, error: "Subject must be between 3 and 200 characters." },
                { status: 400 }
            );
        }

        if (!trimmedMessage || trimmedMessage.length < 10 || trimmedMessage.length > 5000) {
            return Response.json(
                { success: false, error: "Message must be between 10 and 5000 characters." },
                { status: 400 }
            );
        }

        const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || "nandhinin2004@gmail.com";
        const submissionDate = new Date();
        const formattedDate = submissionDate.toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
            dateStyle: "full",
            timeStyle: "medium",
        }) + " (IST)";

        const safeName = escapeHtml(trimmedName);
        const safeEmail = escapeHtml(trimmedEmail);
        const safeSubject = escapeHtml(trimmedSubject);
        const safeMessage = escapeHtml(trimmedMessage);

        // HTML email template
        const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Message</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #F4F5F7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #111827;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #E5E7EB; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);">
    <div style="background: linear-gradient(135deg, #FF5E1E 0%, #FF8A50 100%); padding: 24px 28px; color: #ffffff;">
      <h1 style="margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.3px;">New Contact Message</h1>
      <p style="margin: 6px 0 0 0; font-size: 13px; opacity: 0.95;">Received from Nandhini N's Portfolio Contact Form</p>
    </div>

    <div style="padding: 28px;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr>
          <td style="padding: 10px 0; font-size: 13px; font-weight: 600; color: #6B7280; width: 130px;">Visitor Name</td>
          <td style="padding: 10px 0; font-size: 15px; font-weight: 600; color: #111827;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-size: 13px; font-weight: 600; color: #6B7280;">Visitor Email</td>
          <td style="padding: 10px 0; font-size: 14px;"><a href="mailto:${safeEmail}" style="color: #FF5E1E; text-decoration: none; font-weight: 500;">${safeEmail}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-size: 13px; font-weight: 600; color: #6B7280;">Subject</td>
          <td style="padding: 10px 0; font-size: 14px; font-weight: 500; color: #1F2937;">${safeSubject}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-size: 13px; font-weight: 600; color: #6B7280;">Submission Time</td>
          <td style="padding: 10px 0; font-size: 13px; color: #4B5563;">${formattedDate}</td>
        </tr>
      </table>

      <div style="background-color: #F9FAFB; border: 1px solid #E5E7EB; border-left: 4px solid #FF5E1E; border-radius: 8px; padding: 18px 20px;">
        <p style="margin: 0 0 10px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #6B7280;">Message:</p>
        <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #1F2937; white-space: pre-wrap;">${safeMessage}</p>
      </div>

      <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #E5E7EB; text-align: center;">
        <p style="margin: 0 0 10px 0; font-size: 12px; color: #6B7280;">You can click Reply directly in your email client to respond to ${safeName}.</p>
        <a href="mailto:${safeEmail}?subject=Re: ${encodeURIComponent(trimmedSubject)}" style="display: inline-block; background-color: #FF5E1E; color: #ffffff; text-decoration: none; padding: 8px 18px; font-size: 13px; font-weight: 600; border-radius: 8px;">Reply to ${safeName}</a>
      </div>
    </div>
  </div>
</body>
</html>
`;

        const emailText = `New Contact Form Message

Visitor Name: ${trimmedName}
Visitor Email: ${trimmedEmail}
Subject: ${trimmedSubject}
Date: ${formattedDate}

Message:
${trimmedMessage}

---
Reply directly to ${trimmedEmail}`;

        // 3. Dispatch via configured email provider
        const emailjsServiceId = process.env.EMAILJS_SERVICE_ID;
        const emailjsTemplateId = process.env.EMAILJS_TEMPLATE_ID;
        const emailjsPublicKey = process.env.EMAILJS_PUBLIC_KEY;
        const emailjsPrivateKey = process.env.EMAILJS_PRIVATE_KEY;
        const resendApiKey = process.env.RESEND_API_KEY;

        // Provider A: Resend API
        if (resendApiKey) {
            const resendRes = await fetch("https://api.resend.com/emails", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${resendApiKey}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    from: process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
                    to: [recipientEmail],
                    reply_to: trimmedEmail,
                    subject: `[Portfolio Contact] ${trimmedSubject} - from ${trimmedName}`,
                    html: emailHtml,
                    text: emailText,
                }),
            });

            if (!resendRes.ok) {
                const errorData = await resendRes.json().catch(() => ({}));
                console.error("Resend API error:", errorData);
                return Response.json(
                    {
                        success: false,
                        error: errorData.message || "Failed to deliver email through Resend.",
                    },
                    { status: 502 }
                );
            }

            return Response.json({
                success: true,
                message: "Email sent successfully via Resend.",
            });
        }

        // Provider B: EmailJS REST API
        if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
            const emailjsPayload: Record<string, any> = {
                service_id: emailjsServiceId,
                template_id: emailjsTemplateId,
                user_id: emailjsPublicKey,
                template_params: {
                    from_name: trimmedName,
                    from_email: trimmedEmail,
                    reply_to: trimmedEmail,
                    to_name: "Nandhini N",
                    to_email: recipientEmail,
                    subject: trimmedSubject,
                    message: trimmedMessage,
                    submission_time: formattedDate,
                },
            };

            if (emailjsPrivateKey) {
                emailjsPayload.accessToken = emailjsPrivateKey;
            }

            const emailjsRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(emailjsPayload),
            });

            if (!emailjsRes.ok) {
                const errorText = await emailjsRes.text().catch(() => "");
                console.error("EmailJS API error:", errorText);
                return Response.json(
                    {
                        success: false,
                        error: errorText || "Failed to deliver email through EmailJS.",
                    },
                    { status: 502 }
                );
            }

            return Response.json({
                success: true,
                message: "Email sent successfully via EmailJS.",
            });
        }

        // Provider C: Neither configured yet (inform developer in development)
        console.warn(
            "Contact form submitted, but no email provider is configured. Please set EMAILJS_* or RESEND_API_KEY in .env.local."
        );
        return Response.json(
            {
                success: false,
                notConfigured: true,
                error:
                    "Email service is not yet configured. Please add EMAILJS credentials or RESEND_API_KEY to your .env.local file.",
            },
            { status: 503 }
        );
    } catch (err: any) {
        console.error("Contact API unexpected error:", err);
        return Response.json(
            {
                success: false,
                error: err?.message || "Internal server error while processing message.",
            },
            { status: 500 }
        );
    }
}

