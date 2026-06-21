import Link from "next/link";

const steps = [
  ["Register or contact", "Tell us whether you are a dentist, dental lab, milling center, or patient."],
  ["Prepare records", "Gather STL files, RX form, photos, shade, implant details, and notes."],
  ["Upload case", "Use the case upload prototype to organize information before secure production upload is connected."],
  ["Track status", "Follow the case through review, design, manufacturing, and delivery stages."],
];

export default function SendCasePage() {
  return (
    <main>
      <section className="bg-[#06182b] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow text-[#d9bc7b]">Send a Case</p>
          <h1 className="display-font mt-4 max-w-5xl text-5xl font-bold md:text-6xl">A simple path from digital records to case review.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Use this page to guide dentists and lab partners toward case upload, RX forms, scanner export guidance, and tracking.</p>
        </div>
      </section>
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map(([title, text], index) => <div className="premium-card rounded-3xl p-7" key={title}><p className="text-sm font-bold text-[#b58a3c]">0{index + 1}</p><h2 className="mt-2 text-xl font-bold text-[#09233f]">{title}</h2><p className="mt-3 leading-7 text-slate-600">{text}</p></div>)}
        </div>
        <div className="mx-auto mt-10 flex max-w-[1440px] flex-col gap-3 sm:flex-row">
          <Link href="/case-upload" className="button-primary">Open Upload Portal</Link>
          <Link href="/case-tracking" className="button-secondary">View Tracking Demo</Link>
        </div>
      </section>
    </main>
  );
}
