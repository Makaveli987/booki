"use server";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";

export async function saveUsefull(usefull: boolean) {
  const cookieStore = cookies();
  let bookiCookie = cookieStore.get("booki_id");

  if (!bookiCookie?.value) {
    cookies().set("booki_id", uuidv4(), { secure: true });
    bookiCookie = cookieStore.get("booki_id");
  }

  await db.usefull.create({
    data: {
      usefull,
      userId: bookiCookie?.value,
    },
  });
}
