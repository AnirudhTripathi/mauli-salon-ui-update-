
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" />
        <Route path="/contact" />
      </Routes>
    </Router>
  );
}

export default App;