import React from 'react'
import "./Button.scss";
const Button = ({text,width,height,bck,margin,weight,size,color,padding}) => {
    return (
        <div className="button" style={{width:`${width}`, 
        height:`${height}`, backgroundColor:`${bck}`, 
        margin:`${margin}`, fontWeight:`${weight}`,fontSize:`${size}`,color:`${color}`,padding:`${padding}`
        }}>
           {text} 
        </div>
    )
}

export default Button
