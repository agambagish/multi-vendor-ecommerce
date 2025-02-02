import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2Icon } from "lucide-react";
import Link from "next/link";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex h-[calc(100vh-5rem)] flex-col items-center justify-center space-y-6">
      <ClerkLoaded>
        {children}
      </ClerkLoaded>
      <ClerkLoading>
        <Loader2Icon className="size-6 animate-spin text-muted-foreground" aria-hidden />
      </ClerkLoading>
      <p className="px-8 text-center text-sm text-muted-foreground">
        By clicking continue, you agree to our
        {" "}
        <Link
          href="/terms"
          className="underline underline-offset-4 hover:text-primary"
        >
          Terms of Service
        </Link>
        {" "}
        and
        {" "}
        <Link
          href="/privacy"
          className="underline underline-offset-4 hover:text-primary"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
