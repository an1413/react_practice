import React, { useState } from 'react'

export default function Todotodo({item}) {

  const style1 = {color : "black"};
  const style2 = {color : "lightgrey", textDecoration: "line-through"};

  const [isChecked, setIsChecked] = useState(false);
  const [isHidden, setIsHidden] = useState(true);


  const hChecked = () => {
    setIsChecked(!isChecked);
  }

  const hBtn = () => {
    setIsHidden(false);
  }

  return (
    <p>
      {isHidden && 
      <input type="checkbox" onChange={hChecked} />
      }
      {isHidden && 
      <span style={isChecked ? style2 : style1}>
        {item.name}
      {isChecked && <button onClick={hBtn}>삭제</button>}
      </span>}
      
      
    </p>
  )
}
