import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';


const Coffee = (props) => {
  if(!props.coffee){
    return "Loading..."
  }

  const url="/coffees" + props.coffee.id;

  return (
    <Fragment>
    <img src={props.coffee.imgLink} width="200" />
    <br></br>
    <p> {props.coffee.brandName}</p>
    <p>{props.coffee.productName}</p>
    <p>{props.coffee.origin}</p>
    <p>{props.coffee.typeOfBeans}</p>
    <p>{props.coffee.productInfo}</p>
    <p>£{props.coffee.retailPrice}</p>
    </Fragment>
  )
}

export default Coffee;
