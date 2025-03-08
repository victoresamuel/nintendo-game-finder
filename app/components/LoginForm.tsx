"use client"

import Link from "next/link"
import { useFormStatus } from "react-dom"
import { useActionState } from "react"
import { login } from "@/actions/auth"
import ErrorMessage from "./ErrorMessage"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Image from "next/image"
import marioBowserImage from "@/public/image_mp-superstars.jpg"

function LoginForm() {
  const [state, action] = useActionState(login, undefined)
  return (
    <>
      <div className='relative w-1/2'>
        <Image src={marioBowserImage} fill alt='Picture of the author' />
      </div>
      <div className='flex flex-col w-1/2'>
        <Link href='/' className='w-fit'>
          <h1 className='text-xl font-bold mx-4 my-4 text-sky-700'>
            NINTENDO GAME FINDER
          </h1>
        </Link>
        <form action={action} className='flex justify-center h-screen'>
          <div className='flex flex-col justify-center rounded-xl p-4 w-2/5 gap-8'>
            <div>
              <p>WELCOME TO NINTENDO GAME FINDER!</p>
            </div>

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
          {`Don't have an account?`}{" "}
          <Link
            href={"/signup"}
            className='text-blue-400 hover:underline decoration-1'
          >
            Sign Up
          </Link>
        </p>
      </div>
    </>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button variant='submit' disabled={pending} type='submit'>
      LOG IN
    </Button>
  )
}

export default LoginForm
