import EstimateList from "@/app/ui/components/estimate-list";
import EstimateTemplateList from "@/app/ui/components/estimate-template-list";
import PageTitle from "@/app/ui/page-title";
import { Suspense } from "react";

export default function Page() {
  return <main className="min-h-screen">
    <PageTitle title="Estimates"></PageTitle>
    <Suspense fallback={<>"Fallback thingy"</>}>
      <div className="my-4 mx-2 min-h-screen bg-slate-200 rounded-md">
        <h2 className="w-full text-center text-lg p-1">In-Progress</h2>
        <EstimateList />
      </div>

    </Suspense>
    <Suspense fallback={<>"Fallback thingy"</>}>
      <div className="my-4 mx-2 min-h-screen bg-slate-200 rounded-md">
        <h2 className="w-full text-center text-lg p-1">Templates</h2>
        <EstimateTemplateList />
      </div>

    </Suspense>
  </main>
}