import React from 'react';
import imagesource from '../../images/basket.png'
import './basket.css';


class Basket extends React.PureComponent {
  render(){   
    return (
      <div className="basket">
          <img  src={imagesource} alt="basket"/>                          
      </div>
    )
  }
}
export default Basket;