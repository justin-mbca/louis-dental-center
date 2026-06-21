import Link from "next/link";

const actions = [
  ["Submit New Case", "Upload STL files, RX forms, images, and clinical notes.", "/case-upload"],
  ["Track Case", "View current stage, review requests, and delivery status.", "/case-tracking"],
  ["Download RX Form", "Add a downloadable prescription form in the next iteration.", "/send-a-case"],
  ["Contact Lab Support", "Ask questions about materials, turnaround, files, or case planning.", "/contact"],
];

const resources = [
  "STL export checklist",
  "Implant case submission guide",
  "Full-arch record checklist",
  "Shade photo tips",
  "Material selection guide",
  "Digital workflow FAQ",
];

export default function DentistPortalPage() {
  return (
    <main>
      <section className="bg-[#06182b] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow text-[#d9bc7b]">Dentist Portal</p>
          <h1 className="display-font mt-4 max-w-5xl text-5xl font-bold md:text-6xl">One place to submit, track, and manage digital cases.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">This frontend portal provides the structure for a future authenticated dashboard for dentists, dental labs, and milling centers.</p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-6 md:grid-cols-2 xl:grid-cols-4">
          {actions.map(([title, text, href]) => (
            <Link key={title} href={href} className="premium-card rounded-3xl p-7">
              <h2 className="text-2xl font-bold text-[#09233f]">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
              <p className="mt-6 font-bold text-[#9b732e]">Open →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Resources</p>
            <h2 className="display-font mt-4 text-4xl font-bold text-[#09233f]">Build a better case submission process.</h2>
            <p className="mt-5 leading-8 text-slate-600">These resource cards can later become downloadable PDFs, training pages, or onboarding materials for new partner offices.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {resources.map((item) => <div key={item} className="rounded-2xl bg-white p-5 font-semibold text-[#09233f] shadow-sm">{item}</div>)}
          </div>
        </div>
      </section>
    </main>
  );
}
