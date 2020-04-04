import React from 'react';
import { Price } from './Price';

const Prices  = (props) => {
    const { data } = props;
    return ( 
        <div className="container">
          <div className="card-deck mb-3 text-center">
           {props.data.map ((price, index) => (
              <Price
                name = {price.name}
                cost = {price.cost}
                users = {price.users}
                storage = {price.storage}
                support = {price.support}
                helpCenter = {price.helpCenter}
                keyProps = {index}
              />

           ))}
          </div>
        </div>

     );
}
 
export default Prices;