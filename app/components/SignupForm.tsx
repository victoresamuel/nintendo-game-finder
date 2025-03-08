"use client"

import Link from "next/link"
import { useFormStatus } from "react-dom"
import { useActionState } from "react"
import { signup } from "@/actions/auth"
import ErrorMessage from "./ErrorMessage"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Image from "next/image"
import marioBowserImage from "@/public/image_mario-bowser.webp"

export default function SignupForm() {
  const [state, action] = useActionState(signup, undefined)

  return (
    <main className='flex justify-around h-screen w-full'>
      <div className='flex flex-col w-1/2'>
        <Link href='/' className='w-fit'>
          <h1 className='w-fit text-xl font-bold mx-4 my-4 text-sky-700'>
            NINTENDO GAME FINDER
          </h1>
        </Link>
        <form action={action} className='flex justify-center h-screen'>
          <div className='flex flex-col justify-center rounded-xl p-4 w-2/5 gap-8'>
            <div>
              <p className='text-xs font-semibold'>
                THE START OF YOUR GAME JOURNEY
              </p>
              <p>SIGN UP TO NINTENDO GAME FINDER</p>
            </div>
            <div>
              <Input id='username' name='username' placeholder='USERNAME' />
            </div>
            {state?.errors?.username && (
              <ErrorMessage>{state.errors.username}</ErrorMessage>
            )}

            <div>
              <Input id='email' name='email' placeholder='EMAIL' />
            </div>
            {state?.errors?.email && (
              <ErrorMessage>{state.errors.email}</ErrorMessage>
            )}

            <div>
              <Input
                id='password'
                name='password'
                type='password'
                placeholder='PASSWORD'
              />
            </div>
            {state?.errors?.password && (
              <div>
                <ErrorMessage>Password must:</ErrorMessage>
                <ul>
                  {state.errors.password.map((error) => (
                    <ErrorMessage key={error}>- {error}</ErrorMessage>
                  ))}
                </ul>
              </div>
            )}
            <SubmitButton />
          </div>
        </form>
        <p className='flex w-fit gap-2 mx-4 my-4 font-normal'>
          Have an account?
          <Link
            href={"/login"}
            className='text-blue-400 hover:underline decoration-1'
          >
            Log In
          </Link>
        </p>
      </div>
      <div className='relative w-1/2'>
        <Image src={marioBowserImage} fill alt='Picture of the author' />
      </div>
    </main>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button variant='submit' disabled={pending} type='submit'>
      SIGN UP
    </Button>
  )
}
