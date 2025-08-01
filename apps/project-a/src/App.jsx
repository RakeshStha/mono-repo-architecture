import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "common";
import Home from "./components/Home";
import FAQ from "./components/FAQ";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
  <BrowserRouter basename="/project-a">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
         <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
         <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
