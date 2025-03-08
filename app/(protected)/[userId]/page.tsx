import RoomList from "../../components/RoomList"
import CreateRoomForm from "../../components/CreateRoomForm"
import prisma from "@/app/lib/db"

import React from "react"

export default async function Home() {
  const rooms = await prisma.rooms.findMany()
  return (
    <>
      <RoomList data={rooms} />
      <CreateRoomForm />
    </>
  )
}
