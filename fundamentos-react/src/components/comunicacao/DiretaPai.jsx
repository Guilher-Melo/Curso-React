import React from "react";
import DiretaFilho from './DiretaFilho';

export default function DiretaPai (props) {
  return (
    <div>
      <DiretaFilho nome="Juciclei" idade={18} nerd={true} />
      <DiretaFilho nome="Luiza" idade={38} nerd={false} />
      <DiretaFilho nome="Junior" idade={8} nerd={false} />
      <DiretaFilho nome="Ana" idade={16} nerd={true} />
    </div>
  )
}