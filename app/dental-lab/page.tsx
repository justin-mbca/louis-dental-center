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

      <section className="bg-[#F8FAFC] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow justify-center">Remote CAD/CAM Design Services</p>
          <h2 className="display-font mt-4 text-center text-4xl font-bold text-[#09233f] md:text-5xl">Fast, collaborative design support for your lab.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-center leading-8 text-slate-600">Remote design services tailored to your workflow, with rapid communication and predictable turnaround.</p>
          <div className="mx-auto mt-10 grid gap-6 md:grid-cols-2">
            <div className="premium-card rounded-3xl p-8 text-center">
              <div className="inline-flex rounded-full bg-[#fbf7ee] px-4 py-1 text-sm font-bold text-[#B58A3C]">Rapid Response</div>
              <h3 className="mt-6 text-2xl font-bold text-[#09233f]">1-Hour Rapid Response Service</h3>
              <p className="mt-3 leading-7 text-slate-600">Immediate design communication and technical consultation with fast design review for urgent cases.</p>
              <ul className="mt-6 space-y-3 text-left text-sm leading-6 text-slate-600">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-[#B58A3C]">✓</span> Immediate design communication</li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-[#B58A3C]">✓</span> Technical consultation</li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-[#B58A3C]">✓</span> Fast design review</li>
              </ul>
            </div>
            <div className="premium-card rounded-3xl p-8 text-center">
              <div className="inline-flex rounded-full bg-[#fbf7ee] px-4 py-1 text-sm font-bold text-[#B58A3C]">Standard</div>
              <h3 className="mt-6 text-2xl font-bold text-[#09233f]">24-Hour Design Turnaround</h3>
              <p className="mt-3 leading-7 text-slate-600">Completed design delivery with full digital workflow support and laboratory collaboration.</p>
              <ul className="mt-6 space-y-3 text-left text-sm leading-6 text-slate-600">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-[#B58A3C]">✓</span> Completed design delivery</li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-[#B58A3C]">✓</span> Digital workflow support</li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-[#B58A3C]">✓</span> Laboratory collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow justify-center">Removables</p>
          <h2 className="display-font mt-4 text-center text-4xl font-bold text-[#09233f] md:text-5xl">Removable Denture Solutions</h2>
          <p className="mx-auto mt-5 max-w-2xl text-center leading-8 text-slate-600">Digital and traditional denture options to match your practice workflow and patient needs.</p>
          <div className="mx-auto mt-10 grid gap-6 md:grid-cols-2">
            <div className="premium-card rounded-3xl p-8 text-center">
              <div className="icon-box mx-auto text-xl">✧</div>
              <h3 className="mt-6 text-2xl font-bold text-[#09233f]">3D Printed Dentures</h3>
              <ul className="mt-6 space-y-3 text-left text-sm leading-6 text-slate-600">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-[#B58A3C]">✓</span> Digital workflow</li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-[#B58A3C]">✓</span> Rapid production</li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-[#B58A3C]">✓</span> Consistent results</li>
              </ul>
            </div>
            <div className="premium-card rounded-3xl p-8 text-center">
              <div className="icon-box mx-auto text-xl">✦</div>
              <h3 className="mt-6 text-2xl font-bold text-[#09233f]">Traditional Acrylic Dentures</h3>
              <ul className="mt-6 space-y-3 text-left text-sm leading-6 text-slate-600">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-[#B58A3C]">✓</span> Conventional workflow</li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-[#B58A3C]">✓</span> Time-tested materials</li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-[#B58A3C]">✓</span> Personalized customization</li>
              </ul>
            </div>
          </div>
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
