const restorationTypes = ["Crown", "Bridge", "Veneer", "Implant Crown", "Custom Abutment", "Full Arch / All-on-X", "Night Guard", "Design Only"];
const files = ["STL / scan files", "RX form", "Clinical photos", "Shade photo", "Bite record", "Implant parts information"];

export default function CaseUploadPage() {
  return (
    <main>
      <section className="bg-[#06182b] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow text-[#d9bc7b]">Case Upload</p>
          <h1 className="display-font mt-4 max-w-5xl text-5xl font-bold md:text-6xl">Submit STL files, RX forms, photos, and case instructions.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">This is a frontend portal prototype. Secure upload, authentication, storage, and notifications can be connected in the next development phase.</p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <form className="premium-card rounded-3xl p-7">
            <h2 className="text-2xl font-bold text-[#09233f]">New case intake</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Frontend demo only. Do not upload real patient information until secure storage is implemented.</p>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-700">Doctor / Lab Name<input className="field" placeholder="Practice or lab name" /></label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">Email<input className="field" placeholder="name@example.com" /></label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">Case ID<input className="field" placeholder="Use non-identifying case ID" /></label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">Due Date<input className="field" type="date" /></label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">Restoration Type<select className="field"><option>Select type</option>{restorationTypes.map((item) => <option key={item}>{item}</option>)}</select></label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">Material Preference<input className="field" placeholder="Zirconia, e.max, PMMA, titanium..." /></label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">Shade<input className="field" placeholder="Example: A2, BL2, custom" /></label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">Scanner / Platform<input className="field" placeholder="3Shape, Exocad, Sirona, STL" /></label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-700">Case Notes<textarea className="field min-h-36" placeholder="Occlusion, contacts, margin notes, implant system, design preferences..." /></label>
            <div className="mt-6 rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center">
              <p className="text-lg font-bold text-[#09233f]">Drag and drop files here</p>
              <p className="mt-2 text-sm text-slate-600">STL, PDF, JPG, PNG, ZIP. Secure upload workflow coming soon.</p>
              <button type="button" className="button-secondary mt-5">Choose Files</button>
            </div>
            <button type="button" className="button-primary mt-7">Submit Case Preview</button>
          </form>

          <aside className="space-y-6">
            <div className="rounded-3xl bg-[#f6f1e8] p-7">
              <h2 className="text-2xl font-bold text-[#09233f]">Recommended files</h2>
              <div className="mt-5 grid gap-3">
                {files.map((item) => <div key={item} className="rounded-2xl bg-white p-4 font-semibold text-slate-700">✓ {item}</div>)}
              </div>
            </div>
            <div className="rounded-3xl bg-[#06182b] p-7 text-white">
              <h2 className="text-2xl font-bold">Security note</h2>
              <p className="mt-3 leading-7 text-slate-300">Before production use, connect secure storage, access controls, encrypted upload, retention rules, and privacy review appropriate for your jurisdiction and business model.</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
