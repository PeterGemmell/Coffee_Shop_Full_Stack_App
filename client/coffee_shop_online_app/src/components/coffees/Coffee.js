import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';


const Coffee = (props) => {
  if(!props.coffee){
    return "Loading..."
  }

  const url="/coffees" + props.coffee.id;

  return (
    <Fragment>
    <div className="coffee-component">
    <img src={props.coffee.imgLink} width="280" />
    <div>
    <p><b>{props.coffee.brandName}</b></p><br></br>
    <p><i>Name</i>  {props.coffee.productName}</p>
    <p><i>Origin</i>  {props.coffee.origin}</p>
    <p><i>Beans</i>  {props.coffee.typeOfBeans}</p>
    <p>{props.coffee.productInfo}</p>
    <p>£{props.coffee.retailPrice}</p>
    </div>
    </div>
    </Fragment>
  )
}

export default Coffee;
