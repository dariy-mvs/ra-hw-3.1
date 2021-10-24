import React, { useState } from 'react';
import './HexConverter.css';

export default function HexConverter() {
  let [ color, setColor ] = useState({
    color: ''
  });
  const changeColor = (color) => {
    setColor({
      color: color
    })
  }
  let onChangeField = (e) => {
    e.preventDefault();
    let value = e.target.value;
    if (value.length > 6) {
      let rgbColor = hexToRgb(value);
      changeColor(rgbColor);
    }
  }
  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : 'Ошибка!';
  }
  return (
    <div>
      <form action="" className="form" style={{background: `${color.color}`}}>
        <input type="text" className="form_field" onChange={onChangeField} />
        <span className="message" >{color.color}</span>
        </form>
    </div>
  )
}
