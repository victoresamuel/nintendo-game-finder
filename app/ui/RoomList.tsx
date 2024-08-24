import React from 'react'
import Room from './Room'

type Props = {
  data: {
    id: number
    image_url: string
    game: string
    turns: number
    bonus_stars: boolean
    minigame_help: boolean
    minigame_type: string
    board: string
  }[]
}

function RoomList({ data }: Props) {
  return (
    <ul className='flex flex-wrap'>
      {data.map((room) => (
        <Room
          key={room.id}
          imageUrl={room.image_url}
          game={room.game}
          turns={room.turns}
          bonusStars={room.bonus_stars}
          minigameHelp={room.minigame_help}
          minigameType={room.minigame_type}
          board={room.board}
        />
      ))}
    </ul>
  )
}

export default RoomList
