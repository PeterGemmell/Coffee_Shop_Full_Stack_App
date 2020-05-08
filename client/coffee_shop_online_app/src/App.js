import React, { Component } from 'react';
import Sidebar from "react-sidebar";
import RightSidebar from './containers/RightSidebar';
import ShopContainer from './containers/ShopContainer'


class App extends Component {


  render(){
    return(

      <div>
      <ShopContainer />
      </div>  
    );
  }
}

export default App;
