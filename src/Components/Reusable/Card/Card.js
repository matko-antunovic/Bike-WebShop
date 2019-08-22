import React from 'react';
import './Card.scss';
import {withRouter} from "react-router-dom"

const Card = ({link,match,history}) => {
  // console.log("U CARDU PROPS",link)

  const title = link.map (item => (
    <div onClick={()=>history.push(`${match.url}/${item.name.split(" ").join("")}`)} className="card" key={item.name}>
      <img src={item.imageUrl[0]} alt="alo" />
      <h1 className="title">{item.name}</h1>
      <p className="price">{item.price} $</p>
    </div>
  ));
  return (
    <div className="cards">
      {title}
    </div>
  );
};

export default withRouter(Card);
