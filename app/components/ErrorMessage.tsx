import React from "react"

type Props = {
  children: string[] | string
}

function ErrorMessage({ children }: Props) {
  return (
    <p className='text-red-500 text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
      {children}
    </p>
  )
}

export default ErrorMessage
