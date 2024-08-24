import RoomList from './ui/RoomList'
import { data } from './lib/data'

export default function Home() {
  return <>{data && <RoomList data={data} />}</>
}
