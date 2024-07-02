"use server";
import { formSchema } from "@/components/form";
import { db } from "@/lib/db";
import { z } from "zod";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";

export async function saveSearch(payload: z.infer<typeof formSchema>) {
  const cookieStore = cookies();
  let bookiCookie = cookieStore.get("booki_id");

  if (!bookiCookie?.value) {
    cookies().set("booki_id", uuidv4(), { secure: true });
    bookiCookie = cookieStore.get("booki_id");
  }

  await db.search.create({
    data: {
      params: payload,
      userId: bookiCookie?.value,
    },
  });
}
