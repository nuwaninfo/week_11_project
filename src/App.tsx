import Header from "./components/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" />
          <Route path="/saved" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
