import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "CAD/CAM Dental Design",
    text: "Remote design support for crowns, bridges, veneers, implant restorations, and full-arch cases using modern digital workflows.",
    image: "/images/cadcam-design.png",
    alt: "Dental restoration being designed in CAD/CAM software",
    href: "/dental-lab",
  },
  {
    title: "Crown & Bridge",
    text: "Precision-fit restorative solutions designed for esthetics, function, predictable seating, and reliable chairside delivery.",
    image: "/images/crown-bridge.png",
    alt: "Precision dental crown and bridge restorations",
    href: "/services",
  },
  {
    title: "Implant Restorations",
    text: "Screw-retained crowns, implant bridges, custom abutments, and emergence-profile planning for restorative success.",
    image: "/images/implant-restoration.png",
    alt: "Custom dental implant restoration and abutment",
    href: "/implants",
  },
  {
    title: "Full Arch / All-on-X",
    text: "Collaborative digital planning for All-on-4, All-on-6, hybrid, provisional, and final full-arch restorations.",
    image: "/images/full-arch.png",
    alt: "Full arch dental restoration",
    href: "/implants",
  },
  {
    title: "Digital Impressions",
    text: "STL-based case intake and scanner-friendly communication for efficient dentist-to-lab collaboration.",
    image: "/images/digital-dentistry.png",
    alt: "Digital dental impression and intraoral scan workflow",
    href: "/digital-dentistry",
  },
  {
    title: "Patient Dentistry",
    text: "Modern dental care supported by restorative planning, digital communication, and lab-quality treatment workflows.",
    image: "/images/ai-dentistry.png",
    alt: "Dentist reviewing a digital restorative case",
    href: "/ai-dentistry",
  },
];

const platforms = ["Exocad", "3Shape", "Sirona", "STL Workflows", "Digital Scan Intake", "CAD/CAM Support"];

const aiFeatures = [
  "AI-assisted case intake forms",
  "Restoration and material planning support",
  "Digital case tracking dashboard",
  "Upload workflow for STL, RX forms, photos, and notes",
];

const steps = [
  ["01", "Submit", "Upload STL files, RX details, photos, shade information, and clinical notes."],
  ["02", "Review", "Our team checks the case for missing information, design risks, and workflow requirements."],
  ["03", "Design", "CAD/CAM design is completed using compatible digital platforms and case-specific instructions."],
  ["04", "Deliver", "The approved restoration or design file is prepared for delivery, milling, or manufacturing."],
];

const faqs = [
  ["Who does Louis Dental Center serve?", "We support dentists, dental labs, milling centers, and patients through modern dentistry, CAD/CAM design, and digital laboratory services."],
  ["Can I submit STL files online?", "The site includes a frontend upload workflow for STL, RX forms, photos, and notes. Secure file storage can be connected in the next development phase."],
  ["Do you support Exocad, 3Shape, and Sirona workflows?", "Yes, the website positions Louis Dental Center around common CAD/CAM workflows including Exocad, 3Shape, Sirona, and STL-based digital case intake."],
];

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="eyebrow justify-center">{eyebrow}</p>
      <h2 className="display-font mt-4 text-4xl font-bold tracking-tight text-[#09233f] md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-slate-600">{text}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative min-h-[720px] bg-[#071b30] text-white lg:min-h-[calc(100vh-78px)]">
        <Image src="/images/hero-dental-lab.png" alt="Modern digital dental laboratory workflow" fill priority sizes="100vw" className="object-cover object-[68%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,19,34,.98)_0%,rgba(5,19,34,.9)_38%,rgba(5,19,34,.42)_70%,rgba(5,19,34,.16)_100%)]" />
        <div className="section-shell relative flex min-h-[720px] items-center py-20 lg:min-h-[calc(100vh-78px)]">
          <div className="max-w-3xl">
            <p className="eyebrow text-[#d7b66e]">Louis Dental Center</p>
            <h1 className="display-font mt-6 text-5xl leading-[1.03] sm:text-6xl lg:text-[80px]">
              Modern dentistry.
              <span className="block text-[#d6b36a]">Digital dental lab.</span>
              CAD/CAM precision.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Louis Dental Center combines clinical dentistry, certified dental technology expertise, and advanced digital laboratory workflows for crowns, bridges, implants, full-arch restorations, and remote CAD/CAM design support.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/case-upload" className="button-primary">Upload a Case</Link>
              <Link href="/services" className="button-light">Explore Services</Link>
            </div>
            <div className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
              {["20+ years lab expertise", "Exocad / 3Shape / Sirona", "Dentists, labs & milling centers"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/15 bg-white/10 p-4 text-sm font-semibold text-slate-100 backdrop-blur">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12" id="about">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-xl sm:min-h-[560px]">
            <Image
              src="/images/dental-lab-team.png"
              alt="Dental laboratory team collaborating on a digital restoration"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06182b]/25 to-transparent" />
          </div>
          <div>
            <div className="rounded-[2rem] bg-[#f6f1e8] p-8 shadow-sm">
              <p className="eyebrow">About</p>
              <h2 className="display-font mt-4 text-4xl font-bold text-[#09233f]">A dental center built around digital precision.</h2>
              <p className="mt-5 leading-8 text-slate-700">
                Louis Dental Center provides modern dental care and digital laboratory services with a strong focus on CAD/CAM design, restorative workflows, implant planning, and dependable communication between clinical and laboratory teams.
              </p>
            </div>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {[
                ["For Dentists", "Case collaboration, restoration planning, scanner workflows, and lab communication."],
                ["For Dental Labs", "Overflow CAD design, complex implant design, and full-arch digital support."],
                ["For Milling Centers", "Clean design files, STL workflows, material-aware design, and production support."],
                ["For Patients", "Modern restorative dentistry supported by digital planning and careful craftsmanship."],
              ].map(([title, text]) => (
                <div key={title} className="premium-card rounded-3xl p-6">
                  <h3 className="text-xl font-bold text-[#09233f]">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 sm:px-8 lg:px-12" id="services">
        <SectionHeader eyebrow="Services" title="Restorative, implant, and digital lab support" text="From single-unit restorations to full-arch workflows, our services are designed to help dental professionals improve efficiency, quality, and case communication." />
        <div className="mx-auto mt-12 grid max-w-[1440px] gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="premium-card group overflow-hidden rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b58a3c] focus-visible:ring-offset-4"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 1280px) 31vw, (min-width: 768px) 46vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="icon-box text-xl">✦</div>
                <h3 className="mt-5 text-2xl font-bold text-[#09233f]">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12" id="digital-dentistry">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Digital Dentistry</p>
            <h2 className="display-font mt-4 text-4xl font-bold text-[#09233f] md:text-5xl">A connected workflow from scan to restoration.</h2>
            <p className="mt-5 leading-8 text-slate-600">
              We support STL-based digital case intake, CAD/CAM design, and file communication for Exocad, 3Shape, Sirona, and common scanner workflows. The goal is simple: reduce friction, clarify expectations, and help every case move forward with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {platforms.map((item) => <span key={item} className="rounded-full border border-[#d9bc7b] bg-[#fbf7ee] px-4 py-2 text-sm font-semibold text-[#7b5a22]">{item}</span>)}
            </div>
            <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src="/images/digital-dentistry.png"
                alt="Connected digital dentistry scan and design workflow"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="rounded-[2rem] bg-[#071b30] p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold">Digital case workflow</h3>
            <div className="mt-7 grid gap-4">
              {steps.map(([number, title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/10 p-5">
                  <p className="text-sm font-bold text-[#d9bc7b]">{number}</p>
                  <h4 className="mt-1 text-lg font-bold">{title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#06182b] px-5 py-20 text-white sm:px-8 lg:px-12" id="ai">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div>
            <p className="eyebrow text-[#d9bc7b]">AI-Enhanced Dentistry</p>
            <h2 className="display-font mt-4 text-4xl font-bold md:text-5xl">Future-ready digital case management.</h2>
            <p className="mt-5 leading-8 text-slate-300">
              The new website includes frontend-ready concepts for AI-assisted case intake, restoration planning support, upload workflows, and case tracking. These are designed as conservative decision-support tools, not medical diagnosis tools.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/ai-dentistry" className="button-primary">View AI Features</Link>
              <Link href="/dentist-portal" className="button-light">Open Dentist Portal</Link>
            </div>
          </div>
          <div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
              <Image
                src="/images/ai-dentistry.png"
                alt="Digital case management interface supporting a restorative workflow"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06182b]/30 to-transparent" />
            </div>
            <div className="mt-5 grid gap-4">
              {aiFeatures.map((feature) => <div key={feature} className="rounded-2xl border border-white/10 bg-white/10 p-5 font-semibold text-slate-100">✓ {feature}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12" id="faq">
        <SectionHeader eyebrow="FAQ" title="Common questions" text="A quick overview for dentists, labs, and partners evaluating Louis Dental Center for digital case support." />
        <div className="mx-auto mt-10 max-w-4xl space-y-4">
          {faqs.map(([q, a]) => <div key={q} className="rounded-3xl border border-slate-200 p-6"><h3 className="text-lg font-bold text-[#09233f]">{q}</h3><p className="mt-2 leading-7 text-slate-600">{a}</p></div>)}
        </div>
      </section>

      <section className="bg-[#f6f1e8] px-5 py-20 text-center sm:px-8 lg:px-12" id="contact">
        <p className="eyebrow justify-center">Get Started</p>
        <h2 className="display-font mx-auto mt-4 max-w-4xl text-4xl font-bold text-[#09233f] md:text-5xl">Ready to submit a case or discuss a digital workflow?</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-700">Contact Louis Dental Center for CAD/CAM design, digital dental lab support, restorative dentistry, or partnership inquiries.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/case-upload" className="button-primary">Upload Case</Link>
          <Link href="/contact" className="button-secondary">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}
