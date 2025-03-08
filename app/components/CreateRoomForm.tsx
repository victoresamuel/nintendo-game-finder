"use client"

import { createRoomSchema } from "../lib/definitions"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Image from "next/image"
import groupIcon from "@/public/dice.svg"

import { Button } from "@/app/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select"
import { Switch } from "@/app/components/ui/switch"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"

import { createRoom } from "@/actions/createRoom"
import { setTimeout } from "timers"

export default function CreateRoomForm() {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof createRoomSchema>>({
    resolver: zodResolver(createRoomSchema),
    defaultValues: {
      bonusStars: false,
      minigameHelp: false,
    },
  })

  async function onSubmit(data: z.infer<typeof createRoomSchema>) {
    setIsLoading(!isLoading)
    const formData = new FormData()
    formData.append("game", data.game)
    formData.append("turns", data.turns)
    formData.append("bonusStars", data.bonusStars)
    formData.append("minigameHelp", data.minigameHelp)
    formData.append("minigameType", data.minigameType)
    formData.append("board", data.board)
    await createRoom(formData)
    form.reset()
    setOpen(false)
    setTimeout(() => {
      setIsLoading(false)
    }, 100)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='createRoom' size='xl' className='gap-4'>
          <Image
            priority
            src={groupIcon}
            width={50}
            height={100}
            alt='Create Room Icon'
          />
          <p className='text-2xl'>CREATE ROOM</p>
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>CREATE YOUR ROOM!</DialogTitle>
              <DialogDescription>
                CONFIGURE YOUR ROOM SETTINGS
              </DialogDescription>
            </DialogHeader>
            <FormField
              control={form.control}
              name='game'
              render={({ field }) => (
                <FormItem>
                  <Select
                    name='game'
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className='w-full h-8 font-medium border-2 border-sky-500'>
                        <SelectValue placeholder='SELECT THE GAME' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className='font-medium'>
                      <SelectItem value='Mario Party Superstars'>
                        MARIO PARTY SUPERSTARS
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='turns'
              render={({ field }) => (
                <FormItem>
                  <Select
                    name='turns'
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className='w-full h-8 font-medium border-2 border-sky-500'>
                        <SelectValue placeholder='SELECT THE TOTAL OF TURNS' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className='font-medium'>
                      <SelectItem value='10'>10</SelectItem>
                      <SelectItem value='15'>15</SelectItem>
                      <SelectItem value='20'>20</SelectItem>
                      <SelectItem value='25'>25</SelectItem>
                      <SelectItem value='30'>30</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='bonusStars'
              render={({ field }) => (
                <FormItem className='flex items-center space-x-2 justify-between'>
                  <div className='space-y-0.5'>
                    <FormLabel className='font-medium'>BONUS STARS</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      name='bonusStars'
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='minigameHelp'
              render={({ field }) => (
                <FormItem className='flex items-center space-x-2 justify-between'>
                  <div className='space-y-0.5'>
                    <FormLabel className='font-medium'>MINIGAME HELP</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      name='minigameHelp'
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='minigameType'
              render={({ field }) => (
                <FormItem>
                  <Select
                    name='minigameType'
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className='w-full h-8 border-2 border-sky-500'>
                        <SelectValue placeholder='SELECT THE MINIGAME TYPE' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className='font-medium'>
                      <SelectItem value='All Types'>ALL TYPES</SelectItem>
                      <SelectItem value='Family'>FAMILY</SelectItem>
                      <SelectItem value='Action'>ACTION</SelectItem>
                      <SelectItem value='Nintendo 64'>NINTENDO 64</SelectItem>
                      <SelectItem value='Gamecube'>GAMECUBE</SelectItem>
                      <SelectItem value='Skill'>SKILL</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='board'
              render={({ field }) => (
                <FormItem>
                  <Select name='board' onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className='w-full h-8 border-2 border-sky-500'>
                        <SelectValue placeholder='SELECT THE BOARD' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className='font-medium'>
                      <SelectItem
                        value={`Peach's Birthday Cake`}
                      >{`PEACH'S BIRTHDAY CAKE`}</SelectItem>
                      <SelectItem value='Space Land'>SPACE LAND</SelectItem>
                      <SelectItem
                        value={`Yoshi's Tropical Island`}
                      >{`YOSHI'S TROPICAL ISLAND`}</SelectItem>
                      <SelectItem value='Horror Land'>HORROR LAND</SelectItem>
                      <SelectItem value='Woody Woods'>WOODY WOODS</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button variant='submit' type='submit'>
              {isLoading ? "LOADING..." : "CREATE ROOM"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
