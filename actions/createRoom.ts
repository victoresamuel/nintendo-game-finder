"use server"

import { revalidatePath } from "next/cache"

import prisma from "@/app/lib/db"

export async function createRoom(formData: FormData) {
  await prisma.rooms.create({
    data: {
      imageUrl: "/mario-party.png",
      game: formData.get("game") as string,
      turns: formData.get("turns") as string,
      bonusStars: formData.get("bonusStars") as string,
      minigameHelp: formData.get("minigameHelp") as string,
      minigameType: formData.get("minigameType") as string,
      board: formData.get("board") as string,
    },
  })
  revalidatePath("/")
}
