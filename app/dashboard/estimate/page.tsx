import Button from "@/app/ui/button";
import EstimateList from "@/app/ui/components/estimate-list";
import EstimateTemplateList from "@/app/ui/components/estimate-template-list";
import NewEstimateTemplate from "@/app/ui/components/new-estimate-template";
import PageTitle from "@/app/ui/page-title";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Suspense } from "react";

export default function Page() {
  return <main className="min-h-screen">
    <PageTitle title="Estimates"></PageTitle>
    <div className="lg:flex lg:flex-row">
      <Suspense fallback={<>"Fallback thingy"</>}>
        <div className="my-4 mx-2 min-h-screen bg-slate-200 rounded-md lg:w-1/2">
          <h2 className="w-full text-center text-lg p-1">In-Progress</h2>
          {/* Pass data to component; buttons need the data */}
          <EstimateList />
          <Button className="mt-auto mx-auto px-2 py-2 flex flex-row align-middle"><PlusIcon className="w-6 mr-2"></PlusIcon>New Estimate</Button>
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
}