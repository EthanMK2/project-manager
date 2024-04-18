import EstimateTemplateContextProvider from "@/app/context/estimate-template-context";
import EstimateList from "@/app/ui/components/estimate-list";
import EstimateTemplateList from "@/app/ui/components/estimate-template-list";
import NewEstimate from "@/app/ui/components/new-estimate";
import NewEstimateTemplate from "@/app/ui/components/new-estimate-template";
import PageTitle from "@/app/ui/page-title";
import { Suspense } from "react";

export default function Page() {
  return <EstimateTemplateContextProvider>
    <main className="min-h-screen">
      <PageTitle title="Estimates"></PageTitle>
      <div className="lg:flex lg:flex-row">
        <Suspense fallback={<>"Fallback thingy"</>}>
          <div className="my-4 mx-2 min-h-screen bg-slate-200 rounded-md lg:w-1/2">
            <h2 className="w-full text-center text-lg p-1">In-Progress</h2>
            {/* Pass data to component; buttons need the data */}
            <EstimateList />
            <NewEstimate />

          </div>
        </Suspense>

        <Suspense fallback={<>"Fallback thingy"</>}>
          <div className="my-4 mx-2 min-h-screen bg-slate-200 rounded-md lg:w-1/2">
            <h2 className="w-full text-center text-lg p-1">Templates</h2>
            <EstimateTemplateList />
            <NewEstimateTemplate />

          </div>
        </Suspense>
      </div>
    </main>
  </EstimateTemplateContextProvider>
}