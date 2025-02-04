"use client";

import { AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { z } from "zod";

import type { stores } from "@/db/schema";

import { Completed } from "./completed-step";
import { Intro } from "./intro-step";
import { Name } from "./name-step";
import { Upi } from "./upi-step";

interface Props {
  store: typeof stores.$inferSelect | undefined;
}

export function OnboardingMultiStepForm({ store }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const step = searchParams.get("step");

  useEffect(() => {
    const paramsSchema = z.enum(["upi", "name", "completed"]).nullable();
    const { error } = paramsSchema.safeParse(step);

    if (error) {
      router.push("/onboarding?step=upi");
    }
  });

  return (
    <div className="mx-auto flex h-[calc(100vh-14rem)] w-full max-w-screen-sm flex-col items-center">
      <AnimatePresence mode="wait">
        {!step && <Intro store={store} />}
        {step === "upi" && <Upi store={store} />}
        {step === "name" && <Name store={store} />}
        {step === "completed" && <Completed store={store} />}
      </AnimatePresence>
    </div>
  );
}
