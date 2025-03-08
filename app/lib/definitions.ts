import * as z from "zod"

export const createRoomSchema = z.object({
  game: z.string({
    required_error: "Please select the game",
  }),
  turns: z.string({
    required_error: "Please select the total of turns",
  }),
  bonusStars: z.boolean(),
  minigameHelp: z.boolean(),
  minigameType: z.string({
    required_error: "Please select the minigame type",
  }),
  board: z.string({
    required_error: "Please select the board",
  }),
})

export const loginFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
})

export const signupFormSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
})

export type FormState =
  | {
      errors?: {
        name?: string[]
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined

export type SessionPayload = {
  userId: string | number
  expiresAt: Date
}

export type RoomProps = {
  id: number
  imageUrl: string
  game: string
  turns: string
  bonusStars: string
  minigameHelp: string
  minigameType: string
  board: string
}

export const boards: Record<string, string> = {
  board_yoshi: `Yoshi's Tropical Island`,
  board_peach: `Peach's Birthday Cake`,
  board_spaceland: "Space Land",
  board_woody: "Woody Woods",
  board_horrorland: "Horror Land",
}
