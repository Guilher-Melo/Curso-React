import React from "react";
import './menu.css';

import { Link } from "react-router-dom";

export default function Menu (props) {
  return (
    <aside className="menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li>
            <Link to="/param/1">Param #01</Link>
          </li>

          <li>
            <Link to="/param/2">Param #02</Link>
          </li>

          <li>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}