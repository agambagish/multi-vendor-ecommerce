import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex h-[100vh] items-center px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full space-y-6 text-center">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            404
          </h1>
          <p className="text-gray-500">
            It seems this page doesn't exist.
          </p>
        </div>
        <Link
          href="/"
          className={buttonVariants({ size: "lg" })}
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
