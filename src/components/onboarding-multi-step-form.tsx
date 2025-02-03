"use client";

import { AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";

import { Completed } from "./completed-step";
import { Intro } from "./intro-step";
import { Name } from "./name-step";
import { Upi } from "./upi-step";

export function OnboardingMultiStepForm() {
  const searchParams = useSearchParams();
  const step = searchParams.get("step");

  return (
    <div className="mx-auto flex h-[calc(100vh-14rem)] w-full max-w-screen-sm flex-col items-center">
      <AnimatePresence mode="wait">
        {!step && <Intro key="intro" />}
        {step === "upi" && <Upi />}
        {step === "name" && <Name />}
        {step === "completed" && <Completed />}
        {/* {step === "create-project" && (
          <CreateProject workspaceId={props.workspaceId} />
        )}
        {step === "create-api-key" && <CreateApiKey />}
        {step === "done" && <Done workspaceId={props.workspaceId} />} */}
      </AnimatePresence>
    </div>
  );
}
