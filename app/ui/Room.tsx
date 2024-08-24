import React from 'react'
import Title from './Title'
import Tag from './Tag'
import Button from './Button'

import Image from 'next/image'
import turnsIcon from '@/public/turns.svg'
import bonusStarsIcon from '@/public/bonus-stars.svg'
import helpIcon from '@/public/minigame-help.svg'
import typeIcon from '@/public/minigame-type.svg'
import boardIcon from '@/public/board.svg'

type Props = {
  key: number
  imageUrl: string
  game: string
  turns: number
  bonusStars: boolean
  minigameHelp: boolean
  minigameType: string
  board: string
}

function Room({
  imageUrl,
  game,
  turns,
  bonusStars,
  minigameHelp,
  minigameType,
  board,
}: Props) {
  return (
    <div className='flex border-2 rounded-lg w-5/12 p-4 mx-10 mb-5 gap-4'>
      <Image
        priority
        className='rounded-lg'
        src={imageUrl}
        width={100}
        height={100}
        style={{
          width: 'auto',
          height: 'auto',
        }}
        alt='Game image'
      />
      <div className='flex flex-col gap-2'>
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
              value={bonusStars ? 'Yes' : 'No'}
              borderColor='border-amber-500'
              textColor='text-amber-500'
            />
            <Tag
              icon={helpIcon}
              param='Minigame Help: '
              value={minigameHelp ? 'Yes' : 'No'}
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
        <div className='flex gap-2 place-content-end'>
          <Button text='View Details' />
          <Button text='Enter' />
        </div>
      </div>
      {/* <Players /> */}
    </div>
  )
}

export default Room
