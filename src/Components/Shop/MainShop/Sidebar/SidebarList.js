import React from 'react'
import "./SidebarList.scss"
import {withRouter} from "react-router-dom"

const SidebarList = ({list,hidden,handleChange,history,match}) => {

    return (
        <div className="trail-menu">
        <div className="trail-menu-container">
         {list ? list.map(l=>{
          return(
         <div key={l.id} className="list-menu-bikes">
          <p onClick={()=>handleChange(l.id)} className="trail-title"><span className="trail-sign">{hidden===l.title ? "-" : "+"}</span><span>{l.title}</span></p> 
          <div className={`models ${hidden===l.title ? "show" : "hide"} `} >
              <ul className="trail-list">
                   {l.items.map(i=><li onClick={()=>history.push(`${match.url}/${i.name.split(" ").join("")}`)} key={i.id} className="trail-list-model">{i.name}</li>)}
              </ul>
          </div>
          </div>
          )}): null
        }
      </div>
      </div>
    )
}

export default withRouter(SidebarList);
