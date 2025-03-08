"use server"

import {
  signupFormSchema,
  FormState,
  loginFormSchema,
} from "@/app/lib/definitions"
import { createSession, deleteSession } from "@/app/lib/session"
import prisma from "@/app/lib/db"
import { redirect, RedirectType } from "next/navigation"
const bcrypt = require("bcryptjs")

export async function signup(state: FormState, formData: FormData) {
  const validatedFields = signupFormSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { username, email, password } = validatedFields.data
  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.users.create({
    data: { username, email, password: hashedPassword },
  })

  if (!user) {
    return {
      message: "An error ocurred while creating your account",
    }
  } else {
    redirect("/login")
  }
}

export async function login(prevState: any, formData: FormData) {
  const result = loginFormSchema.safeParse(Object.fromEntries(formData))

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    }
  }

  const { email, password } = result.data

  const user = await prisma.users.findUnique({
    where: {
      email: email,
    },
    select: {
      id: true,
      email: true,
      password: true,
    },
  })

  if (!user) {
    console.log("The email is not in the database")
  } else {
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      console.log("the password is incorrect")
    } else {
      const userId = user.id.toString()
      await createSession(userId)

      redirect(`/`)
    }
  }
}

export async function logout() {
  deleteSession()
  redirect("/")
}
