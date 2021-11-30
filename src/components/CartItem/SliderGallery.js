import React from 'react'
import './SliderGallery.css'

export default class SliderGallery extends React.Component {
  constructor(){
    super()
    this.state = { active: 0 }
  }
  updateIndex(newIndex){
    if(newIndex < 0 ){
      newIndex = 0;
    }
    else if (newIndex >= this.props.gallery.length) {
      newIndex = this.props.gallery.length - 1
    }
    this.setState({active: newIndex})
  }
  render () {  
  const gallery = this.props.gallery;
  return (
    <div className="slider-wrapper">
      {gallery.length > 1 ? <span onClick={()=>{this.updateIndex(this.state.active - 1)}} className="slider-arrow slider-arrow-left">&#60;</span>  : null }
      {gallery.length > 1 ? <span onClick={()=>{this.updateIndex(this.state.active + 1)}} className="slider-arrow slider-arrow-right">&#62;</span> : null }
      <div className="viewport" style={{transform: `translateX(-${this.state.active * (100/gallery.length)}%)`}}>
        {gallery.map((image)=> {
          return <div className="gallery-item">
          <img src={image} alt="galleryitem"/>
          </div>
        })}
      </div>
    </div>
  )
  }
}