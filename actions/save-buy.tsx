"use server";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";

export async function saveBuy(title: string, author: string) {
  const cookieStore = cookies();
  let bookiCookie = cookieStore.get("booki_id");

  if (!bookiCookie?.value) {
    cookies().set("booki_id", uuidv4(), { secure: true });
    bookiCookie = cookieStore.get("booki_id");
  }

  await db.buy.create({
    data: {
      title,
      author,
      userId: bookiCookie?.value,
    },
  });
}
