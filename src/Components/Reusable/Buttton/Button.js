import React from 'react'
import "./Button.scss";
import {withRouter} from "react-router-dom"


const Button = ({text,width,height,bck,margin,weight,size,color,padding,history,url,border}) => {
    return (
        <div className="button"
        onClick={()=>{history.push(`${url}`)}}
        style={{width:`${width}`, 
        height:`${height}`, backgroundColor:`${bck}`, 
        margin:`${margin}`, fontWeight:`${weight}`,fontSize:`${size}`,color:`${color}`,padding:`${padding}`, border:`${border}`
        }}>
           {text} 
        </div>
    )
}

export default withRouter(Button)
