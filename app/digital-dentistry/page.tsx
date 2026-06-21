import Link from "next/link";

const tools = [
  ["Exocad", "Dental CAD design workflows for crowns, bridges, implants, abutments, and full-arch cases."],
  ["3Shape", "Scanner and design ecosystem support for digital impressions and collaborative case planning."],
  ["Sirona", "Digital workflow compatibility for scanner-based submission and restorative case communication."],
  ["STL Files", "Standard digital model and scan file workflows for remote design and milling collaboration."],
  ["Digital Photos", "Support for shade, smile, occlusion, and esthetic communication through case image uploads."],
  ["CAD/CAM Manufacturing", "Design files prepared with material, margin, contacts, and production constraints in mind."],
];

export default function DigitalDentistryPage() {
  return (
    <main>
      <section className="bg-[#06182b] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow text-[#d9bc7b]">Digital Workflow</p>
          <h1 className="display-font mt-4 max-w-4xl text-5xl font-bold md:text-6xl">Digital dentistry from scan intake to CAD/CAM delivery.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">A streamlined digital workflow for dentists, dental labs, and milling centers using Exocad, 3Shape, Sirona, STL files, photos, RX forms, and structured case notes.</p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tools.map(([title, text]) => (
            <div key={title} className="premium-card rounded-3xl p-7">
              <h2 className="text-2xl font-bold text-[#09233f]">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow justify-center">Next Step</p>
          <h2 className="display-font mt-4 text-4xl font-bold text-[#09233f]">Add secure upload and case tracking when ready.</h2>
          <p className="mt-5 leading-8 text-slate-600">The frontend is structured so a future backend can connect file storage, email notifications, authentication, and case status tracking.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/case-upload" className="button-primary">Upload Case</Link>
            <Link href="/case-tracking" className="button-secondary">View Tracking Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
