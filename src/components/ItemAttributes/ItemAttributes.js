import React from 'react';
import CartAttributes from '../AttrSet/CartAttributes/CartAttributes';


class ItemAttributes extends React.PureComponent {
  render(){
    const item = this.props.item;
    return (
      <div className="item-attributes mini-attributes">  
       {!item.attributes.length ? null :
            item.attributes.map((item,index)=> (
              <CartAttributes
                key={`${item.pickedAttrs}_${index}`} 
                picked={this.props.item.pickedAttrs} 
                item = {item}
               />
            ))
        }  
      </div>
    )
  }
}

export default ItemAttributes