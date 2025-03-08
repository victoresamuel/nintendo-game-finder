import React from 'react'

type Props = {
  text: string
}

function SecondaryButton({ text }: Props) {
  return (
    <button className='outline outline-1 outline-sky-500 p-1 px-4 text-sm bg-white text-sky-500 rounded-xl hover:bg-slate-500 hover:text-white hover:outline-none'>
      {text}
    </button>
  )
}

export default SecondaryButton
