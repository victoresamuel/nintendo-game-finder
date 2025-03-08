import React from 'react'

type Props = {
  text: string
}

function Title({ text }: Props) {
  return <div className='font-bold text-xl'>{text}</div>
}

export default Title
