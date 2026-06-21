import Link from "next/link";

const patientServices = [
  ["General Dentistry", "Preventive and restorative dental care supported by clear communication and modern digital records."],
  ["Cosmetic Dentistry", "Smile-focused restorative planning including veneers, crowns, shade communication, and esthetic design."],
  ["Restorative Dentistry", "Crowns, bridges, implant restorations, and treatment workflows supported by in-house digital lab expertise."],
  ["Dental Implants", "Implant restoration planning with attention to function, esthetics, emergence profile, and long-term maintenance."],
  ["Digital Impressions", "Scanner-friendly workflows that reduce traditional impression friction and support faster case communication."],
  ["Complex Case Planning", "Collaboration across clinical and laboratory perspectives for multi-unit, full-arch, and interdisciplinary cases."],
];

const professionalServices = [
  "CAD/CAM dental design",
  "Crown and bridge design",
  "Implant crown design",
  "Custom abutment design",
  "Full arch and All-on-X workflow support",
  "STL review and digital case intake",
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <section className="bg-[#06182b] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow text-[#d9bc7b]">Services</p>
          <h1 className="display-font mt-4 max-w-4xl text-5xl font-bold md:text-6xl">Modern dental care supported by digital laboratory precision.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Louis Dental Center brings together patient-centered dentistry and professional CAD/CAM design support for dentists, laboratories, and milling centers.</p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="display-font text-4xl font-bold text-[#09233f]">For patients</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {patientServices.map(([title, text]) => (
              <div key={title} className="premium-card rounded-3xl p-7">
                <h3 className="text-2xl font-bold text-[#09233f]">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">For professionals</p>
            <h2 className="display-font mt-4 text-4xl font-bold text-[#09233f]">Digital design support for clinical and lab teams.</h2>
            <p className="mt-5 leading-8 text-slate-600">We help dental professionals move cases through a clearer digital workflow: case intake, design review, CAD/CAM planning, and delivery coordination.</p>
            <Link href="/case-upload" className="button-primary mt-8">Upload a Case</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {professionalServices.map((service) => <div key={service} className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold text-[#09233f] shadow-sm">✓ {service}</div>)}
          </div>
        </div>
      </section>
    </main>
  );
}
