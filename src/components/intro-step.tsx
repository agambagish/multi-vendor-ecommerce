"use client";

import { motion } from "framer-motion";
import { notFound, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Balancer } from "react-wrap-balancer";

import { Button } from "@/components/ui/button";
import type { stores } from "@/db/schema";
import { useDebounce } from "@/hooks/use-debounce";

interface Props {
  store: typeof stores.$inferSelect | undefined;
}

export function Intro({ store }: Props) {
  const router = useRouter();
  const showText = useDebounce(true, 800);

  useEffect(() => {
    if (store?.id) {
      notFound();
    }
  });

  return (
    <motion.div
      className="flex h-full w-full flex-col items-center justify-center"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, type: "spring" }}
    >
      {showText && (
        <motion.div
          variants={{
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate="show"
          className="mx-5 flex flex-col items-center space-y-6 text-center sm:mx-auto"
        >
          <motion.h1
            className="font-cal text-4xl font-bold transition-colors sm:text-5xl"
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, type: "spring" },
              },
            }}
          >
            <Balancer>Welcome to MultiComm</Balancer>
          </motion.h1>
          <motion.p
            className="max-w-md text-muted-foreground transition-colors sm:text-lg"
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, type: "spring" },
              },
            }}
          >
            Onboard in our platform and sell cools stuffs 📦
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, type: "spring" },
              },
            }}
          >
            <Button
              size="lg"
              onClick={() => router.push("/onboarding?step=upi")}
            >
              Get Started
            </Button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
