import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Help } from "./components/Help";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <Router>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path = "/About" element={<About/>}/>
        <Route path = "/contacts" element={<Contact/>}/>
        <Route path = "/help" element={<Help/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
