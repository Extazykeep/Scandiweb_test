import React from 'react';
import imagesource from '../../images/basket.png'
import './basket.css';
import {Link, withRouter} from "react-router-dom";



class Basket extends React.Component {
  render(){   
    return (
      <div className="basket">
         <Link style={{display: "flex", alignItems: "center"}} className="backto" exact to="/" >
            <img  src={imagesource} alt="basket"/> 
            <div >Catalog page</div> 
        </Link >               
      </div>
    )
  }
}
export default withRouter(Basket);