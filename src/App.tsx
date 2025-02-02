import FrontPage from "./components/FrontPage"
import Header from "./components/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import useJokes from "./hooks/useJokes"

function App() {
  const { addJoke } = useJokes()
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<FrontPage saveJoke={addJoke} />} />
          <Route path="/saved" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
