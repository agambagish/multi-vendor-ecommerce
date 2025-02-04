import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Jost } from "next/font/google";

import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

const font = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MultiComm - Made with ❤️ by Akash",
  description: "Open-source multi vendor Ecommerce project made using React, Next.js, Shadcn UI.",
};

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn("antialiased", font.className)}
        >
          {children}
          <Toaster
            className={font.className}
            theme="light"
            richColors
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
