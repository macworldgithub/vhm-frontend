import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ── Helpers ───────────────────────────────────────────────────────────────────
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildRow(label: string, value: string | undefined): string {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:10px 16px;font-weight:bold;background:#f9fafb;border:1px solid #e5e7eb;width:140px;vertical-align:top;">${label}</td>
      <td style="padding:10px 16px;border:1px solid #e5e7eb;">${value.replace(/\n/g, "<br/>")}</td>
    </tr>`;
}

// ── POST /api/contact ─────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, message } = body as {
      fullName?: string;
      email?: string;
      phone?: string;
      message?: string;
    };

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Full name, email address, and message are required.",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address.",
        },
        { status: 400 }
      );
    }

    // ── SMTP config from env ───────────────────────────────────────────────
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = parseInt(process.env.SMTP_PORT ?? "587", 10);
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const CONTACT_TO = process.env.CONTACT_TO ?? "asset@vhmpartners.com.au";

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      console.error("SMTP environment variables are not configured.");
      return NextResponse.json(
        {
          success: false,
          message: "Mail service is not configured. Please contact us directly at asset@vhmpartners.com.au",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"VHM Partners Contact Form" <${SMTP_USER}>`,
      to: CONTACT_TO,
      replyTo: email,
      subject: `New Contact Form Submission: ${fullName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="background:#0b1623;color:#60a5fa;padding:16px 20px;margin:0;border-radius:6px 6px 0 0;">
            📩 New Kredo Contact Submission
          </h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            ${buildRow("Full Name", fullName)}
            ${buildRow("Email Address", email)}
            ${buildRow("Phone Number", phone)}
            ${buildRow("Message", message)}
          </table>
          <p style="font-size:12px;color:#888;padding:12px;margin:0;border-top:1px solid #ddd;">
            Submitted via vhm-frontend.vercel.app Contact Form
          </p>
        </div>`,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Contact form submission sent from ${email} (${fullName})`);

    return NextResponse.json(
      {
        success: true,
        message:
          "Your message has been sent successfully! We will be in touch shortly.",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("Contact form error:", msg);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send your message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
