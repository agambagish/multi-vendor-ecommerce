import {
  OnboardingMultiStepForm,
} from "@/components/onboarding-multi-step-form";

export default function Page() {
  return (
    <>
      <OnboardingMultiStepForm />
      <div className="absolute inset-0 top-12 -z-10 bg-cover bg-center" />
    </>
  );
}
