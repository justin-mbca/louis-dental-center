export default function ContactPage() {
  return (
    <main>
      <section className="bg-[#06182b] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow text-[#d9bc7b]">Contact</p>
          <h1 className="display-font mt-4 max-w-5xl text-5xl font-bold md:text-6xl">Contact Louis Dental Center.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Reach out for dental care, CAD/CAM design, case upload questions, digital lab support, or professional collaboration.</p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <h2 className="display-font text-4xl font-bold text-[#09233f]">Let us know how we can help.</h2>
            <p className="mt-5 leading-8 text-slate-600">For fastest response, include your role, case type, desired service, file platform, and timeline. For patient care, include your general concern and preferred contact method.</p>
            <div className="mt-8 rounded-3xl bg-[#f6f1e8] p-7">
              <p><strong>Phone:</strong> <a href="tel:+19493786176" className="text-[#8f671f]">1 (949) 378-6176</a></p>
              <p className="mt-3"><strong>Email:</strong> <a href="mailto:frank28cdt@gmail.com" className="text-[#8f671f]">frank28cdt@gmail.com</a></p>
              <p className="mt-3 text-slate-600">Add official business address, hours, and licensing information before public launch.</p>
            </div>
          </div>

          <form className="premium-card rounded-3xl p-7">
            <div className="grid gap-5 md:grid-cols-2">
              <input className="field" placeholder="Name" />
              <input className="field" placeholder="Email" />
              <input className="field" placeholder="Phone" />
              <select className="field"><option>Dental service inquiry</option><option>Dental lab / CAD design case</option><option>Case upload support</option><option>Partnership inquiry</option><option>Patient inquiry</option></select>
            </div>
            <textarea className="field mt-5 min-h-40" placeholder="Tell us about your case, service need, or question." />
            <button type="button" className="button-primary mt-6">Submit Preview</button>
            <p className="mt-4 text-sm text-slate-500">Frontend form only. Connect to email, CRM, or secure backend before production use.</p>
          </form>
        </div>
      </section>
    </main>
  );
}
