const cases = [
  { id: "LCD-24018", type: "Implant Crown", status: "Design in Progress", doctor: "Sample Dental Group", due: "Jun 28", progress: 45 },
  { id: "LCD-24019", type: "Full Arch Prototype", status: "Review Requested", doctor: "North Lab Partner", due: "Jul 02", progress: 60 },
  { id: "LCD-24020", type: "Zirconia Bridge", status: "Manufacturing", doctor: "Smile Studio", due: "Jul 05", progress: 78 },
];

const stages = ["Case received", "Technical review", "Design in progress", "Review requested", "Manufacturing", "Shipped / ready"];

export default function CaseTrackingPage() {
  return (
    <main>
      <section className="bg-[#06182b] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow text-[#d9bc7b]">Case Tracking</p>
          <h1 className="display-font mt-4 max-w-5xl text-5xl font-bold md:text-6xl">A transparent dashboard for digital lab cases.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">This sample dashboard shows how dentists and lab partners could track case progress, review requests, and workflow status.</p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-6 lg:grid-cols-3">
            {cases.map((item) => (
              <div key={item.id} className="premium-card rounded-3xl p-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-[#b58a3c]">{item.id}</p>
                    <h2 className="mt-1 text-2xl font-bold text-[#09233f]">{item.type}</h2>
                  </div>
                  <span className="rounded-full bg-[#fbf7ee] px-3 py-1 text-xs font-bold text-[#7b5a22]">{item.due}</span>
                </div>
                <p className="mt-4 text-sm text-slate-600">{item.doctor}</p>
                <p className="mt-5 font-semibold text-[#09233f]">{item.status}</p>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-[#b58a3c]" style={{ width: `${item.progress}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-slate-50 p-7">
            <h2 className="text-2xl font-bold text-[#09233f]">Workflow stages</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
              {stages.map((stage, index) => (
                <div key={stage} className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-sm font-bold text-[#b58a3c]">0{index + 1}</p>
                  <p className="mt-2 font-semibold text-slate-700">{stage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
