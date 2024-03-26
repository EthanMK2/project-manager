import ProjectList from "@/app/ui/components/project-list";
import { Suspense } from "react";

export default function Page() {
  
  return <main className="min-h-screen">
    <Suspense fallback={<>LOADING FALLBACK HERE</>}>
      <ProjectList />
    </Suspense>
  </main>
}