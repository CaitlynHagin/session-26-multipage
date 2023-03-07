import "./App.css"
import { Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import MainLayout from "./components/MainLayout"
import Bio from "./pages/Bio"

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/bio" element={<Bio />}></Route>
        </Routes>
      </MainLayout>
    </div>
  )
}

export default App
