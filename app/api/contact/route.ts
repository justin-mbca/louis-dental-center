import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactRequest = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

const value = (input: unknown) => (typeof input === "string" ? input.trim() : "");

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");
      return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
    }

    const body = (await request.json()) as ContactRequest;
    const contactDetails = {
      name: value(body.name),
      email: value(body.email),
      phone: value(body.phone),
      subject: value(body.subject),
      message: value(body.message),
    };

    if (!contactDetails.name || !contactDetails.email || !contactDetails.message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(contactDetails.email)) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }

    const recipients =
      process.env.CONTACT_RECIPIENTS
        ?.split(",")
        .map(email => email.trim())
        .filter(Boolean) ||
      ["justinzhang.xl@gmail.com"];

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: recipients,
      replyTo: contactDetails.email,
      subject: `Contact Form - ${contactDetails.subject || "General Inquiry"} - Louis Dental Center`,
      text: [
        `Name: ${contactDetails.name}`,
        `Email: ${contactDetails.email}`,
        `Phone: ${contactDetails.phone || "Not provided"}`,
        `Subject: ${contactDetails.subject || "Not provided"}`,
        `Message: ${contactDetails.message}`,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend contact error:", error);
      return NextResponse.json({ error: "Email could not be sent." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact request error:", error);
    return NextResponse.json({ error: "Email could not be sent." }, { status: 500 });
  }
}
