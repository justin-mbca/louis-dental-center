import Link from "next/link";

const products = [
  ["Full Contour Crowns", "Zirconia, lithium disilicate, and material-aware designs for predictable function and fit."],
  ["Crown & Bridge Design", "Single units, multi-unit bridges, cutback designs, and restorative contours for clinical success."],
  ["Implant Crowns", "Screw-retained and cement-retained workflows with emergence profile and occlusion in mind."],
  ["Custom Abutments", "Digital abutment designs planned around tissue support, restorative space, and final contour."],
  ["All-on-X / Full Arch", "Full-arch, hybrid, provisional, and final restoration workflows for complex implant cases."],
  ["Veneers & Cosmetic Design", "Esthetic anterior cases with attention to smile line, texture, translucency, and symmetry."],
  ["Removables & Guards", "Support for removable prosthetics, provisionals, night guards, and appliance-related workflows."],
  ["Overflow CAD Support", "Remote design capacity for dental labs and milling centers during high-volume periods."],
];

export default function DentalLabPage() {
  return (
    <main>
      <section className="bg-[#06182b] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow text-[#d9bc7b]">Digital Dental Laboratory</p>
          <h1 className="display-font mt-4 max-w-4xl text-5xl font-bold md:text-6xl">CAD/CAM design and restorative laboratory services.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Professional dental lab support for crowns, bridges, implants, custom abutments, full-arch restorations, and digital design workflows.</p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map(([title, text]) => (
            <div key={title} className="premium-card rounded-3xl p-6">
              <h2 className="text-xl font-bold text-[#09233f]">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f6f1e8] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow justify-center">Case Collaboration</p>
          <h2 className="display-font mt-4 text-4xl font-bold text-[#09233f]">Send scans, RX forms, and case notes digitally.</h2>
          <p className="mt-5 leading-8 text-slate-700">The current portal is frontend-ready and can later be connected to secure storage, email notifications, lab management software, or a custom case management backend.</p>
          <Link href="/case-upload" className="button-primary mt-8">Start Case Upload</Link>
        </div>
      </section>
    </main>
  );
}
