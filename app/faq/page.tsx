const faqs = [
  ["What is Louis Dental Center?", "Louis Dental Center is positioned as a modern dental center and digital dental laboratory offering dentistry, CAD/CAM design, crown and bridge, implant restorations, custom abutments, and full-arch workflow support."],
  ["Who can use the dental lab services?", "Dentists, dental laboratories, milling centers, and professional partners can use the digital lab and CAD/CAM design services."],
  ["Do you support digital impressions?", "Yes. The website supports STL-based case submission concepts and digital workflows related to Exocad, 3Shape, Sirona, and scanner exports."],
  ["Can I upload files now?", "The current upload page is a frontend prototype. Secure upload, authentication, storage, and notifications should be connected before real patient or case files are submitted."],
  ["Do the AI features make clinical decisions?", "No. The AI content is framed as workflow support for intake, organization, and case completeness. Final clinical decisions remain with licensed dental professionals."],
  ["Can pricing be shown online?", "Yes. The pricing page can list starting prices, ranges, or request-a-quote workflows after the business confirms final fees."],
];

export default function FAQPage() {
  return (
    <main>
      <section className="bg-[#06182b] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow text-[#d9bc7b]">FAQ</p>
          <h1 className="display-font mt-4 max-w-5xl text-5xl font-bold md:text-6xl">Frequently asked questions.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Answers for patients, dentists, laboratories, and milling partners evaluating Louis Dental Center.</p>
        </div>
      </section>
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map(([q, a]) => <div className="rounded-3xl border border-slate-200 p-7" key={q}><h2 className="text-xl font-bold text-[#09233f]">{q}</h2><p className="mt-3 leading-7 text-slate-600">{a}</p></div>)}
        </div>
      </section>
    </main>
  );
}
