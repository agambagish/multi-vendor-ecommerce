"use client";

import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { useEffect } from "react";

export function Completed() {
  useEffect(() => {
    const end = Date.now() + 3 * 1000;
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end)
        return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors,
      });

      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  });

  return (
    <motion.div
      className="shadox-xl flex h-full w-full flex-col items-center justify-center bg-opacity-60 p-8"
      exit={{ opacity: 0, scale: 0.95 }}
      initial={{ background: "transparent" }}
      animate={{ background: "var(--background)" }}
      transition={{ duration: 0.3, type: "spring" }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 250 },
          show: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4, type: "spring" },
          },
        }}
        initial="hidden"
        animate="show"
        className="flex flex-col space-y-4 rounded-xl bg-background/60 p-8"
      >
        <h1 className="font-cal text-2xl font-bold transition-colors sm:text-3xl">
          You are all set!
        </h1>
        <p className="max-w-md text-muted-foreground transition-colors sm:text-lg">
          Congratulations, you have successfully created your store.
        </p>
        <p className="text-sm text-muted-foreground">
          You will be redirected to your project momentarily.
        </p>
      </motion.div>
    </motion.div>
  );
}
