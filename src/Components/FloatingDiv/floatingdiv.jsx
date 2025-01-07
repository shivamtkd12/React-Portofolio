import React from 'react'
import '/Users/shivamtkd12/portfolio-starter/src/Components/FloatingDiv/floatingdiv.css'

const FloatingDiv = ({image, txt1, txt2}) => {
    return (
        <div className="floatingdiv">
            <img src={image} alt="" />
            <span>{txt1} <br /> {txt2}</span>
        </div>
    )
}

export default FloatingDiv
