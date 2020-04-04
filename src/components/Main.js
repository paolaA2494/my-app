
import React, { Component } from 'react';
import Content from './Content';
import Prices from './Prices';
import { Price } from './Price';


//extends-HAGA UNA HERENCIA
class Main extends Component {
  constructor(props){
    super(props)
    
  }
  render() {
    const { dataContent, dataPrices } = this.props
    return (
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <Content 
        data ={dataContent}
         
        />
        <Prices data ={dataPrices} />
      </div>
    );
  }
}

export default Main;