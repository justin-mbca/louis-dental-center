import { NextResponse } from "next/server";
import { Resend } from "resend";

type CaseUploadRequest = {
  doctor_name?: string;
  email?: string;
  case_id?: string;
  restoration_type?: string;
  due_date?: string;
  material?: string;
  shade?: string;
  scanner_platform?: string;
  notes?: string;
};

const value = (input: unknown) => (typeof input === "string" ? input.trim() : "");

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");
      return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
    }

    const body = (await request.json()) as CaseUploadRequest;
    const caseDetails = {
      doctor_name: value(body.doctor_name),
      email: value(body.email),
      case_id: value(body.case_id),
      restoration_type: value(body.restoration_type),
      due_date: value(body.due_date),
      material: value(body.material),
      shade: value(body.shade),
      scanner_platform: value(body.scanner_platform),
      notes: value(body.notes),
    };

    if (
      !caseDetails.doctor_name ||
      !caseDetails.email ||
      !caseDetails.case_id ||
      !caseDetails.restoration_type
    ) {
      return NextResponse.json({ error: "Required fields are missing." }, { status: 400 });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(caseDetails.email)) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      //to: "louisdentalcenter@gmail.com",
      to: "justinzhang.xlr@gmail.com",
      replyTo: caseDetails.email,
      subject: "New Case Intake - Louis Dental Center",
      text: [
        `Doctor/Lab Name: ${caseDetails.doctor_name}`,
        `Email: ${caseDetails.email}`,
        `Case ID: ${caseDetails.case_id}`,
        `Restoration Type: ${caseDetails.restoration_type}`,
        `Due Date: ${caseDetails.due_date || "Not provided"}`,
        `Material: ${caseDetails.material || "Not provided"}`,
        `Shade: ${caseDetails.shade || "Not provided"}`,
        `Scanner Platform: ${caseDetails.scanner_platform || "Not provided"}`,
        `Notes: ${caseDetails.notes || "Not provided"}`,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend case-upload error:", error);
      return NextResponse.json({ error: "Email could not be sent." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Case-upload request error:", error);
    return NextResponse.json({ error: "Email could not be sent." }, { status: 500 });
  }
}
