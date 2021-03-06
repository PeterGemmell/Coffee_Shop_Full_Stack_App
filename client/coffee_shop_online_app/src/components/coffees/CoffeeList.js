import React, {Component} from 'react';
import Coffee from './Coffee.js';


class CoffeeList extends Component {
  render() {
   let coffees = this.props.coffees.map((coffee, index) => { //changed props to state and also back in coffee container.
     return  <Coffee key={coffee.id}
             coffee={coffee}
             addToCart={this.props.addToCart} />

   });
   return (
     <section id="list">
      {coffees}
     </section>
   )
  }
}


export default CoffeeList;
