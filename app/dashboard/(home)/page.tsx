import { ProjectType } from "@/app/models/mongoose/project"
import ProjectList from "@/app/ui/components/project-list";
import { useSession } from "next-auth/react";
import { Suspense } from "react";

export default function Page() {
  
  return <main className="min-h-screen">
    <Suspense fallback={<>LOADING FALLBACK HERE</>}>
      <ProjectList />
    </Suspense>
  </main>
}