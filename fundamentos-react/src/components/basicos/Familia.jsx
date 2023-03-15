import React, { cloneElement } from "react";


export default function Familia (props) {
  return (
    <div>
      { 
        React.Children.map(props.children, (el)=> {
          return cloneElement(el, props)
        })
      }
    </div>
  )
}