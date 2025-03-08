import React from "react"
import Room from "./Room"

import { RoomProps } from "../lib/definitions"

type Props = {
  data: RoomProps[]
}

function RoomList({ data }: Props) {
  return (
    <ul className='flex flex-wrap justify-between gap-8'>
      {data.map((room) => (
        <Room
          key={room.id}
          id={room.id}
          imageUrl={room.imageUrl}
          game={room.game}
          turns={room.turns}
          bonusStars={room.bonusStars}
          minigameHelp={room.minigameHelp}
          minigameType={room.minigameType}
          board={room.board}
        />
      ))}
    </ul>
  )
}

export default RoomList
