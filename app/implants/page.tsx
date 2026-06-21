import Link from "next/link";

const implantServices = [
  ["Implant Crowns", "Screw-retained and cement-retained restorations designed around tissue, occlusion, and esthetics."],
  ["Custom Abutments", "Abutment designs that support emergence profile, restorative space, and final crown contours."],
  ["Implant Bridges", "Multi-unit implant restorative planning with attention to passive fit and cleansability."],
  ["All-on-4 / All-on-6", "Full-arch digital workflows for provisional and final hybrid restorations."],
  ["Full-Arch Design", "Record review, scan alignment, esthetic setup, and design-only support for labs and clinicians."],
  ["Implant System Notes", "Structured intake for implant platform, scan body, component preferences, and torque requirements."],
];

export default function ImplantsPage() {
  return (
    <main>
      <section className="bg-[#06182b] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]"><p className="eyebrow text-[#d9bc7b]">Implants</p><h1 className="display-font mt-4 max-w-5xl text-5xl font-bold md:text-6xl">Implant restoration and full-arch digital support.</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Support for implant crowns, custom abutments, implant bridges, and All-on-X restorative workflows.</p></div>
      </section>
      <section className="px-5 py-20 sm:px-8 lg:px-12"><div className="mx-auto grid max-w-[1440px] gap-6 md:grid-cols-2 xl:grid-cols-3">{implantServices.map(([title,text])=><div key={title} className="premium-card rounded-3xl p-7"><h2 className="text-2xl font-bold text-[#09233f]">{title}</h2><p className="mt-3 leading-7 text-slate-600">{text}</p></div>)}</div><div className="mx-auto mt-10 max-w-[1440px]"><Link href="/case-upload" className="button-primary">Upload Implant Case</Link></div></section>
    </main>
  );
}
