import React from 'react'

class Gallery extends React.Component {
  constructor(){
    super()
    this.state = {imageUrl: ""};
    this.setMainImage = this.setMainImage.bind(this);
  }
  componentDidMount(){
    if(this.props) {
      this.setState({imageUrl: this.props.gallery[0]})
    }    
  }
  setMainImage(url){
    this.setState({imageUrl: url})
  }
  render(){
    const gallery = this.props.gallery;    
    return (
      <div className="product-gallery">
          <div className="product-gallery-thumbs">
          {
          gallery.map((picture)=>{
            return (
            <div  className="product-gallery-thumb">
              <img onClick={(e)=>{this.setMainImage(e.target.src)}} src={picture} alt="gallery-img"/>
            </div>
            )})            
          } 
          </div>
          <div className="product-gallery-main">
              <img src={this.state.imageUrl} alt="galery-main"/>
          </div>
     </div>
    )
  }
}

export default Gallery