import React from 'react'

type Props = {
  text: string
}

function Button({ text }: Props) {
  return (
    <button className='border p-1 px-4 text-sm bg-themed-blue text-white rounded-xl'>
      {text}
    </button>
  )
}

export default Button
