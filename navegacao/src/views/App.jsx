import React from "react";
import './app.css';

import { BrowserRouter } from "react-router-dom";

import Content from "../components/layout/Content";
import Menu from "../components/layout/Menu";


const App = props => {
  return (
    <div className="app">
      <BrowserRouter>
        <Menu />
        <Content />
      </BrowserRouter>
    </div>
  )
}

export default App;