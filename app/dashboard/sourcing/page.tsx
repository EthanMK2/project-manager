import SourceList from "@/app/ui/components/source-list";
import { Suspense } from "react";

export default function Page() {

  return <main className="min-h-screen">
    <Suspense fallback={<>"Fallback thingy"</>}>
      <SourceList />
    </Suspense>
  </main>
}