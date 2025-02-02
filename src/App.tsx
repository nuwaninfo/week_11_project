import FrontPage from "./components/FrontPage"
import Header from "./components/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/saved" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
