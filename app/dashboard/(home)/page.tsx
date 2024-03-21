"use client";
import { ProjectType } from "@/app/models/mongoose/project"
import { useSession } from "next-auth/react";

export default function Page() {
  const DUMMY_PROJECT: ProjectType = {
    title: "TestTitle",
    checklist: [],
    contacts: [],
    notes: "",
    shortDescription: "",
    address: "",
    completionStatus: "",
    finishDate: undefined,
    inspectionSuccessful: false,
    priority: "",
    expectedPay: ""
  }

  const sessionData = useSession();
  
  return <main className="min-h-screen">
    Home Page
  </main>
}