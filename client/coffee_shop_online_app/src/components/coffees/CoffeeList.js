import React from 'react';
import Coffee from './Coffee.js';

const CoffeeList = (props) => {

  if(props.coffees.length === 0){
    return (<p>Loading...</p>)
  }

  const coffees = props.coffees.map((coffee, index) => {
    return (
      <li key={index} className="component-item">
      <div className="component">
      <Coffee coffee={coffee} />
      </div>
      </li>
    )
  })


  return (
    <ul className="component-list">
    {coffees}
    </ul>



  )
}

export default CoffeeList;
