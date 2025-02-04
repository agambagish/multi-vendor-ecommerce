import { auth } from "@clerk/nextjs/server";
import { Suspense } from "react";

import {
  OnboardingMultiStepForm,
} from "@/components/onboarding-multi-step-form";
import { Spinner } from "@/components/spinner";
import { db } from "@/db";

export default async function Page() {
  const { userId } = await auth();

  const store = await db.query.stores.findFirst({
    where: (fields, operators) =>
      operators.eq(fields.ownerId, userId ?? ""),
  });

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
      <OnboardingMultiStepForm store={store} />
      <div className="absolute inset-0 top-12 -z-10 bg-cover bg-center" />
    </Suspense>
  );
}
