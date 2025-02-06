import type { User } from "@clerk/nextjs/server";
import { clsx } from "clsx";
import type { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getUserEmail(user: User | null) {
  const email
    = user?.emailAddresses.find(e => e.id === user.primaryEmailAddressId)
      ?.emailAddress ?? "";

  return email;
}

export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
