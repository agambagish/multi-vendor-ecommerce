"use server";

import { currentUser } from "@clerk/nextjs/server";

import { db } from "@/db";
import { stores } from "@/db/schema";
import { getUserEmail } from "@/lib/utils";

export async function createStore(values: { name: string; vpa: string }) {
  try {
    const user = await currentUser();

    if (!user) {
      return {
        data: null,
        error: "Unauthorized",
      };
    }

    const [newStore] = await db
      .insert(stores)
      .values({
        ...values,
        email: getUserEmail(user),
        ownerId: user.id,
      })
      .returning({
        id: stores.id,
      });

    return {
      data: newStore,
      error: null,
    };
  }
  catch {
    return {
      data: null,
      error: "Oops! Please try again.",
    };
  }
}
