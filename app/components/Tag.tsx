import React from 'react'

import Image from 'next/image'

type Props = {
  icon: string
  param: string
  value: string | number
  borderColor: string
  textColor: string
}

function Tag({ icon, param, value, borderColor, textColor }: Props) {
  return (
    <div
      className={`flex gap-1 p-1 border-4 rounded-xl text-sm ${borderColor}`}
    >
      <Image
        src={icon}
        width={20}
        alt='Icon'
        style={{
          width: '1rem',
          height: 'auto',
        }}
      />
      <p className={`${textColor}`}>{param}</p>
      <p className={`${textColor}`}>{value}</p>
    </div>
  )
}

export default Tag
