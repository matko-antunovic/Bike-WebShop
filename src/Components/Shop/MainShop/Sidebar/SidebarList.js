import React from 'react'
import "./SidebarList.scss"

const SidebarList = ({list,hidden,handleChange}) => {
    return (
        <div className="trail-menu">
        <div className="trail-menu-container">
          <span className="trail-plus-sign">+</span>
         {list ? list.map(l=>{
             return(
         <div key={l.id} className="list-menu-bikes">
          <h2 onClick={()=>handleChange(l.id)} className="trail-title">{l.title}</h2> 
          <div className={`models ${hidden===l.title ? "show" : "hide"} `} >
              <ul className="trail-list">
                   {l.items.map(i=><li key={i.id} className="trail-model-1">{i.name}</li>)}
              </ul>
          </div>
          </div>
          )}): null
        }
      </div>
      </div>
    )
}

export default SidebarList
