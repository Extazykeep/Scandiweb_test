import React from 'react'
import './AttrSet.css'

class AttrSet extends React.Component {
  constructor () {
    super()
    this.state = { active: null }
  }

  setActive (index, item, name) {
    this.setState({ active: index })
    this.props.setAttr(item, name)
  }

  render () {
    const items = this.props.item  
    return (
      <div className="attr-set">
        <div className="single-attr-set">
          <span>{items.name}:</span>
          <div>
          {
          items.type === 'swatch'
            ? items.items.map((item, index) => (
            <button
              key={`${item.name}_${index}`}
              onClick={() => { this.setActive(index, item, items.name) }}
              className={`attribute-value ${this.state.active === index ? 'active-trans' : ''}`}
              style={{ backgroundColor: item.value }}
            >
            </button>
            ))
            : items.items.map((item, index) => (
            <button
              key={`${item.name}_${index}`}
              onClick={() => { this.setActive(index, item, items.name) }}
              className={`attribute-value ${this.state.active === index ? 'actives' : ''}`}
            >
              {item.value}
            </button>
            ))
          }
        </div>

        </div>
      </div>
    )
  }
}

export default AttrSet
