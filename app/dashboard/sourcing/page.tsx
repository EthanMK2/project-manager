import SourceList from "@/app/ui/components/source-list";
import PageTitle from "@/app/ui/page-title";
import { Suspense } from "react";

export default function Page() {

  return <main className="min-h-screen w-full">
    <PageTitle title="Sources"></PageTitle>
    <Suspense fallback={<>"Fallback thingy"</>}>
      <SourceList />
    </Suspense>
  </main>
}