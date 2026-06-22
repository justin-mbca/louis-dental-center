"use client";

import { FormEvent, useState } from "react";

const restorationTypes = [
  "Crown",
  "Bridge",
  "Veneer",
  "Implant Crown",
  "Custom Abutment",
  "Full Arch / All-on-X",
  "Night Guard",
  "Design Only",
];

const initialForm = {
  doctor_name: "",
  email: "",
  case_id: "",
  restoration_type: "",
  due_date: "",
  material: "",
  shade: "",
  scanner_platform: "",
  notes: "",
};

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export default function CaseUploadPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/case-upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Case submission failed");
      }

      setForm(initialForm);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main>
      <section className="bg-[#06182b] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow text-[#d9bc7b]">Case Upload</p>
          <h1 className="display-font mt-4 max-w-5xl text-5xl font-bold md:text-6xl">
            Submit your case details to Louis Dental Center.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Complete the intake form below and our team will receive your case inquiry by email.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <form className="premium-card rounded-3xl p-7" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-[#09233f]">New case intake</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Frontend demo. Do not upload patient-identifying information.
            </p>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Doctor / Lab Name
                <input
                  className="field"
                  placeholder="Practice or lab name"
                  value={form.doctor_name}
                  onChange={(event) => updateField("doctor_name", event.target.value)}
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Email
                <input
                  className="field"
                  type="email"
                  placeholder="name@example.com"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Case ID
                <input
                  className="field"
                  placeholder="Use non-identifying case ID"
                  value={form.case_id}
                  onChange={(event) => updateField("case_id", event.target.value)}
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Due Date
                <input
                  className="field"
                  type="date"
                  value={form.due_date}
                  onChange={(event) => updateField("due_date", event.target.value)}
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Restoration Type
                <select
                  className="field"
                  value={form.restoration_type}
                  onChange={(event) => updateField("restoration_type", event.target.value)}
                  required
                >
                  <option value="">Select type</option>
                  {restorationTypes.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Material Preference
                <input
                  className="field"
                  placeholder="Zirconia, e.max, PMMA, titanium..."
                  value={form.material}
                  onChange={(event) => updateField("material", event.target.value)}
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Shade
                <input
                  className="field"
                  placeholder="Example: A2, BL2, custom"
                  value={form.shade}
                  onChange={(event) => updateField("shade", event.target.value)}
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Scanner / Platform
                <input
                  className="field"
                  placeholder="3Shape, Exocad, Sirona, STL"
                  value={form.scanner_platform}
                  onChange={(event) => updateField("scanner_platform", event.target.value)}
                />
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-700">
              Case Notes
              <textarea
                className="field min-h-36"
                placeholder="Occlusion, contacts, margin notes, implant system, design preferences..."
                value={form.notes}
                onChange={(event) => updateField("notes", event.target.value)}
              />
            </label>

            <button
              type="submit"
              className="button-primary mt-7 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Submitting..." : "Submit Case"}
            </button>

            <div aria-live="polite">
              {status === "success" && (
                <div className="mt-6 rounded-2xl bg-emerald-50 p-5 text-emerald-900">
                  <p className="font-bold">Case Submitted Successfully</p>
                  <p className="mt-1">Thank you. Louis Dental Center has received your inquiry.</p>
                </div>
              )}
              {status === "error" && (
                <p className="mt-6 rounded-2xl bg-red-50 p-5 font-semibold text-red-800">
                  Submission failed. Please try again later.
                </p>
              )}
            </div>
          </form>

          <aside className="space-y-6">
            <div className="rounded-3xl bg-[#f6f1e8] p-7">
              <h2 className="text-2xl font-bold text-[#09233f]">Before you submit</h2>
              <p className="mt-3 leading-7 text-slate-700">
                Include a non-identifying case ID, restoration details, requested due date, and any
                design preferences our team should review.
              </p>
            </div>
            <div className="rounded-3xl bg-[#06182b] p-7 text-white">
              <h2 className="text-2xl font-bold">Security note</h2>
              <p className="mt-3 leading-7 text-slate-300">
                This form sends the information you enter by email. Do not include patient names,
                dates of birth, medical record numbers, or other patient-identifying information.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
