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
    {props.coffee.brandName}
    {props.coffee.productName}
    {props.coffee.origin}
    {props.coffee.typeOfBeans}
    {props.coffee.retailPrice}
    </Link>
    </Fragment>
  )
}

export default Coffee;
