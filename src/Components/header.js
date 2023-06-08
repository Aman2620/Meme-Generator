import React from "react"
import './header.css'
import trollface from '../images/troll-face.png';


function header() {
  return (
    <div className="header-container">
      <div className="header-content">
        <img src={trollface} alt="troll-face" />
        <h2>Meme Generator</h2>
      </div>
      
    </div>
  )
}

export default header
