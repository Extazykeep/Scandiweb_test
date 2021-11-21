import React from 'react';
import './Categories.css';
import {Link} from "react-router-dom";

class Categories extends React.Component {
  constructor(){
    super();
    this.selectHandler = this.selectHandler.bind(this);
    this.state = {filter: "all"};
    this.types = ["all","tech","clothes"];
  }  
  selectHandler(type){
    this.setState({filter: type});
  }
  render() {  
    const filter = this.state.filter; 
    return (
      <div className="categories">
        {this.types.map((item)=>{
          return (
          <Link
            className={filter === item ? "selected" : ""} 
            to={"/" + item} 
            onClick ={(e)=> {this.selectHandler(e.target.innerHTML)}}
          >
           {item}
          </Link>
          )
        })}
      </div> 
    )
  }
}

export default Categories;
