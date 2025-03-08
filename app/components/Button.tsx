import React from "react"

type Props = {
  text: string
}

function Button({ text }: Props) {
  return (
    <button className='outline outline-1 outline-themed-blue p-1 px-4 text-sm bg-sky-500 text-white rounded-lg hover:bg-slate-500 hover:outline-slate-500 '>
      {text}
    </button>
  )
}

export default Button
