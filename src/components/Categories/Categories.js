import React from 'react';
import './Categories.css';
import filterStore from '../../redux/filterStore';


class Categories extends React.Component {
  constructor(props){
    super(props);
    this.filterAndSelectHandler = this.filterAndSelectHandler.bind(this);
    this.state = {filter: filterStore.getState()};
  }  
  filterAndSelectHandler(type){
    this.setState({filter: type});
    filterStore.dispatch({type: type})
  }
  render() {  
    const filter = this.state.filter;   
    return (
      <div className="categories">
        <p  className={filter === "all" ? "selected" : ""} 
        onClick ={()=> {this.filterAndSelectHandler("all")}}>
        All</p>        
        <p className={filter === "tech" ? "selected" : ""} 
        onClick ={()=> {this.filterAndSelectHandler("tech");          
        }}>
        Tech</p>
        <p className={filter === "clothes" ? "selected" : ""} 
        onClick ={()=> {this.filterAndSelectHandler("clothes");          
          }}>
        Clothes</p>
      </div>
    )
  }
}

export default Categories;