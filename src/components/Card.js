import { useState } from "react";

export const Card = ({index, props: {en, ru}}) => {
  const [value, setValue] = useState(ru);

  const flipCard = ev => {
    if(ev.target.classList.contains('active')) {
      setValue(value===ru ? en : ru)
    }
  }
  
  return(
    <li data-index={index} onClick={flipCard} className="cards-list__card">
      {value}
    </li>
  );
}