import { Navbar } from "./components/navbar"
import { Bottom } from "./components/bottom"
import { Contents } from "./components/contents"

export default function Home() {
  return (
    <main className='block m-0'>
      <Navbar />
      <Contents />
      <Bottom />
    </main>
  )
}
