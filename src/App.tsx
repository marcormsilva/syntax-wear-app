import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Gallery } from "./components/Gallery"
import { Categories } from "./components/Categories"

function App() {


  return (
    <>
      <Header />
      <main className="py-10">
        <Hero />
        <Categories />
        <Gallery />
      </main>

    </>
  )
}

export default App
