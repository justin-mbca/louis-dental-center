import Link from "next/link";

const features = [
  ["AI Case Intake Assistant", "A structured intake experience that helps collect restoration type, material, shade, due date, files, and notes before the case reaches the lab team."],
  ["Restoration Planning Support", "Future decision support for material suggestions, restoration category, case completeness, and workflow guidance. This is not a diagnostic tool."],
  ["Design Review Checklist", "A conservative checklist concept for margin clarity, occlusion notes, contact preferences, implant details, and missing records."],
  ["Automated Case Routing", "Future routing logic could separate crowns, implants, full-arch, rush cases, and design-only cases for faster internal review."],
  ["Case Status Summaries", "Plain-language summaries for dentists and labs so each case stage is easier to understand and follow."],
  ["Quote Readiness", "A future quote workflow can estimate whether enough information has been submitted before manual review."],
];

const guardrails = [
  "AI features should support workflow efficiency, not replace licensed clinical judgment.",
  "Final treatment decisions remain with the dentist and qualified dental professionals.",
  "Sensitive case files should be handled with secure storage and appropriate privacy safeguards before production launch.",
];

export default function AIDentistryPage() {
  return (
    <main>
      <section className="bg-[#06182b] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow text-[#d9bc7b]">AI-Enhanced Digital Dentistry</p>
          <h1 className="display-font mt-4 max-w-5xl text-5xl font-bold md:text-6xl">Smarter case intake, clearer communication, and future-ready digital workflows.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Louis Dental Center can evolve beyond a marketing website into a digital dental platform with AI-assisted intake, upload workflows, case tracking, and structured lab communication.</p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map(([title, text]) => (
            <div key={title} className="premium-card rounded-3xl p-7">
              <div className="icon-box">AI</div>
              <h2 className="mt-5 text-2xl font-bold text-[#09233f]">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f6f1e8] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Responsible AI</p>
            <h2 className="display-font mt-4 text-4xl font-bold text-[#09233f]">Conservative claims, practical value.</h2>
            <p className="mt-5 leading-8 text-slate-700">The AI sections are designed for operational support: intake completeness, case organization, workflow guidance, and communication. They should not claim to diagnose, prescribe, or replace professional review.</p>
          </div>
          <div className="space-y-4">
            {guardrails.map((item) => <div key={item} className="rounded-2xl bg-white p-5 font-semibold text-[#09233f] shadow-sm">✓ {item}</div>)}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 text-center sm:px-8 lg:px-12">
        <h2 className="display-font text-4xl font-bold text-[#09233f]">Try the digital workflow demo.</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">Use the frontend case upload and tracking pages as the foundation for the future production portal.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/case-upload" className="button-primary">Open Case Upload</Link>
          <Link href="/case-tracking" className="button-secondary">View Tracking</Link>
        </div>
      </section>
    </main>
  );
}
