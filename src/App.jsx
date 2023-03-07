import "./App.css";
import { Route, Routes } from "react-router-dom";
// imported 'react router' library 'packages'
import About from "./pages/About";
import Home from "./pages/Home";
import MainLayout from "./components/MainLayout";
import Bio from "./pages/Bio";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/bio" element={<Bio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          {/* <Route path="/testimonials" element={<Testimonials />}></Route> */}
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
