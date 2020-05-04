import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';


const Coffee = (props) => {
  if(!props.coffee){
    return "Loading..."
  }

  const url="/coffees" + props.coffee.id;

  return (
    <Fragment>
    <Link to ={url} className="name">
    <img src={props.coffee.imgLink} width="200" />
    <br></br>
    {props.coffee.brandName}
    {props.coffee.productName}
    {props.coffee.origin}
    {props.coffee.typeOfBeans}
    <p>£{props.coffee.retailPrice}</p>
    </Link>
    </Fragment>
  )
}

export default Coffee;
