"use client"

import React from "react"
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "./ui/alert-dialog"
import { Button } from "./ui/button"
import Image from "next/image"
import { RoomProps } from "../lib/definitions"
import { boards } from "../lib/definitions"
import { getKey } from "../lib/utils"

function ViewDetails({
  id,
  imageUrl,
  game,
  turns,
  bonusStars,
  minigameHelp,
  minigameType,
  board,
}: RoomProps) {
  const boardImg = getKey(boards, board)
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='secondary'>View Details</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Title
            <Image
              priority
              className='rounded-lg'
              src={`/${boardImg}.webp`}
              width={500}
              height={100}
              alt='Board Image'
            />
            <AlertDialogDescription>
              <p>Game: {game}</p>
              <p>Bonus Stars: {bonusStars ? "Yes" : "No"}</p>
              <p>Minigame Help: {minigameHelp ? "Yes" : "No"} </p>
              <p>Minigame Type: {minigameType}</p>
              <p>Turns: {turns} </p>
              <p>Board: {board}</p>
            </AlertDialogDescription>
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ViewDetails
