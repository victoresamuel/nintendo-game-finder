import React from "react"
import Title from "./Title"
import Tag from "./Tag"
import ViewDetails from "./ViewDetails"

import Image from "next/image"
import turnsIcon from "@/public/turns.svg"
import bonusStarsIcon from "@/public/bonus-stars.svg"
import helpIcon from "@/public/minigame-help.svg"
import typeIcon from "@/public/minigame-type.svg"
import boardIcon from "@/public/board.svg"

import { RoomProps } from "../lib/definitions"

function Room({
  id,
  imageUrl,
  game,
  turns,
  bonusStars,
  minigameHelp,
  minigameType,
  board,
}: RoomProps) {
  return (
    <div className='w-5/12 flex border-2 rounded-lg p-4 gap-4'>
      <Image
        priority
        className='rounded-lg'
        src={imageUrl}
        width={200}
        height={100}
        alt='Game image'
      />
      <div className='flex flex-col justify-between items-end gap-2'>
        <div className='flex flex-col gap-2'>
          <Title text={game} />
          <div className='flex flex-wrap gap-2'>
            <Tag
              icon={turnsIcon}
              param='Turns: '
              value={turns}
              borderColor='border-sky-600'
              textColor='text-sky-600'
            />
            <Tag
              icon={bonusStarsIcon}
              param='Bonus Stars:'
              value={bonusStars === "true" ? "Yes" : "No"}
              borderColor='border-amber-500'
              textColor='text-amber-500'
            />
            <Tag
              icon={helpIcon}
              param='Minigame Help: '
              value={minigameHelp === "true" ? "Yes" : "No"}
              borderColor='border-red-600'
              textColor='text-red-600'
            />
            <Tag
              icon={typeIcon}
              param='Minigame Type: '
              value={minigameType}
              borderColor='border-teal-500'
              textColor='text-teal-500'
            />
            <Tag
              icon={boardIcon}
              param='Board: '
              value={board}
              borderColor='border-violet-600'
              textColor='text-violet-600'
            />
          </div>
        </div>
        <ViewDetails
          key={id}
          id={id}
          imageUrl={imageUrl}
          board={board}
          game={game}
          turns={turns}
          bonusStars={bonusStars}
          minigameHelp={minigameHelp}
          minigameType={minigameType}
        />
      </div>
      {/* <Players /> */}
    </div>
  )
}

export default Room
