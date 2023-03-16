import React from "react";
import './content.css';

import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';

import { Routes, Route } from "react-router-dom";
import NotFound from "../../views/examples/NotFound";

export default function Content (props) {
  return (
    <main className="content">
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/param/:id" element={<Param />}/>
        <Route path="/" exact element={<Home />} />
        <Route path="*" element={<NotFound />}/>
     </Routes>
    </main>
  )
}