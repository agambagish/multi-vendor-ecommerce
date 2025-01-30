import type { Metadata } from "next";
import { Jost } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

const font = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MultiComm - Made with ❤️ by Akash",
  description: "Open-source multi vendor Ecommerce project made using React, Next.js, Shadcn UI.",
};

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", font.className)}
      >
        {children}
      </body>
    </html>
  );
}
