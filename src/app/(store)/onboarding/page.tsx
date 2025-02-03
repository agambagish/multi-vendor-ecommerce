import { Suspense } from "react";

import {
  OnboardingMultiStepForm,
} from "@/components/onboarding-multi-step-form";
import { Spinner } from "@/components/spinner";

export default function Page() {
  return (
    <Suspense fallback={(
      <div className="flex h-[calc(100vh-5rem)] items-center justify-center">
        <Spinner
          variant="ellipsis"
          className="size-8 text-muted-foreground"
        />
      </div>
    )}
    >
      <OnboardingMultiStepForm />
      <div className="absolute inset-0 top-12 -z-10 bg-cover bg-center" />
    </Suspense>
  );
}
