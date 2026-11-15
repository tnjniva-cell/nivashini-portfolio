import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let rawPayload: unknown;
  try {
    rawPayload = await request.json();
  } catch {
    return Response.json({ message: "Please submit a valid form." }, { status: 400 });
  }

  if (
    typeof rawPayload !== "object" ||
    rawPayload === null ||
    Array.isArray(rawPayload)
  ) {
    return Response.json({ message: "Please submit a valid form." }, { status: 400 });
  }
  const payload = rawPayload as ContactPayload;

  if (typeof payload.website === "string" && payload.website.trim()) {
    return Response.json({ message: "Message received." });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (
    name.length < 2 ||
    name.length > 100 ||
    email.length > 254 ||
    !isValidEmail(email) ||
    message.length < 10 ||
    message.length > 5000
  ) {
    return Response.json(
      { message: "Please check your name, email, and message, then try again." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_EMAIL;
  if (!apiKey || !from || !to) {
    console.error("Contact form email is not configured.");
    return Response.json(
      { message: "The contact form is temporarily unavailable. Please email directly." },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      console.error("Resend rejected a contact form message:", error.message);
      return Response.json(
        { message: "Your message could not be sent right now. Please try again later." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Contact form email delivery failed:", error);
    return Response.json(
      { message: "Your message could not be sent right now. Please try again later." },
      { status: 502 },
    );
  }

  return Response.json({ message: "Message sent." }, { status: 200 });
}
