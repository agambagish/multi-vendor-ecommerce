"use client";

import { motion } from "framer-motion";
import { notFound, useRouter } from "next/navigation";
import { useEffect } from "react";
import Balancer from "react-wrap-balancer";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { stores } from "@/db/schema";
import {
  useOnboardingMultiStepForm,
} from "@/hooks/use-onboarding-multi-step-form";
import { useZodForm } from "@/hooks/use-zod-form";

const schema = z.object({
  vpa: z.string().regex(/^[\w.-]+@[\w.-]+$/, { message: "Invalid UPI ID" }),
});

interface Props {
  store: typeof stores.$inferSelect | undefined;
}

export function Upi({ store }: Props) {
  const { setVpa, vpa } = useOnboardingMultiStepForm();

  const router = useRouter();
  const form = useZodForm({
    schema,
    defaultValues: {
      vpa,
    },
  });

  useEffect(() => {
    if (store?.id) {
      notFound();
    }
  });

  function onSubmit(values: z.infer<typeof schema>) {
    setVpa(values.vpa);
    router.push("/onboarding?step=name");
  }

  return (
    <motion.div
      className="my-auto flex h-full w-full flex-col items-center justify-center"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, type: "spring" }}
    >
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
        className="flex flex-col rounded-xl bg-background/60 p-8"
      >
        <motion.h1
          className="font-cal mb-4 text-2xl font-bold transition-colors sm:text-3xl"
          variants={{
            hidden: { opacity: 0, x: 250 },
            show: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.4, type: "spring" },
            },
          }}
        >
          <Balancer>
            Let's start off by your UPI details
          </Balancer>
        </motion.h1>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 100 },
            show: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.4, type: "spring" },
            },
          }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="vpa"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Virtual Payment Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. hello@upi"
                        autoFocus
                        autoComplete="off"
                        spellCheck="false"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                    <FormDescription>
                      Enter the vpa where you want recive the payments.
                    </FormDescription>
                  </FormItem>
                )}
              />
              <Button type="submit">Continue</Button>
            </form>
          </Form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
