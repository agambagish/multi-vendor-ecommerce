"use client";

import { motion } from "framer-motion";
import { PlusCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Balancer from "react-wrap-balancer";
import { toast } from "sonner";
import { z } from "zod";

import { createStore } from "@/actions/create-store";
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

import { Spinner } from "./spinner";

const schema = z.object({
  name: z.string().min(3, { message: "It must be atleast 3 character long" }),
});

interface Props {
  store: typeof stores.$inferSelect | undefined;
}

export function Name({ store }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { name, vpa, setVpa } = useOnboardingMultiStepForm();

  const router = useRouter();
  const form = useZodForm({
    schema,
    defaultValues: {
      name,
    },
  });

  useEffect(() => {
    if (store?.id) {
      router.push(`/dashboard/${store.id}`);
    }
  });

  async function onSubmit(values: z.infer<typeof schema>) {
    setIsLoading(true);

    const { data, error } = await createStore({ ...values, vpa });

    if (error) {
      toast.error("Something went wrong", {
        description: error,
      });
    }

    if (data) {
      setVpa("");
      router.push("/onboarding?step=completed");
    }

    setIsLoading(false);
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
            What should be the name of your store?
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
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. Shopper Store"
                        autoFocus
                        autoComplete="off"
                        spellCheck="false"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                    <FormDescription>
                      You can change it later.
                    </FormDescription>
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading
                  ? (
                      <Spinner aria-hidden variant="ellipsis" />
                    )
                  : (
                      <PlusCircleIcon aria-hidden />
                    )}
                Create
              </Button>
            </form>
          </Form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
