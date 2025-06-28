import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./HomePage/Home";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";

function App() {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
