import React from 'react'

class CartAttributes extends React.Component {
  constructor () {
    super()
    this.state = { active: 0, picked: {} }
  }

  componentDidMount () {
    const picked = this.props.picked
    this.setState({ picked: { ...picked } })
  }

  componentDidUpdate (prevProps) {
    if (this.props.item !== prevProps.item) {
      const picked = this.props.picked
      this.setState({ picked: { ...picked } })
    }
  }

  render () {
    const items = this.props.item
    const picked = this.state.picked
    return (
      <div className="item-attrname">
          <div>{items.name}</div>
          {
          items.type === 'swatch'
            ? items.items.map((item, index) => (
              <button
                key={`${item.name}_${index}`}
                className={`attribute-value ${picked[items.name] === item.value ? 'active-trans' : ''}`}
                style={{ backgroundColor: item.value }}>
              </button>
            ))
            : items.items.map((item, index) => (
              <button
                key={`${item.name}_${index}`}
                className={`attribute-value ${picked[items.name] === item.value ? 'actives' : ''}`}>
                {item.value}
              </button>
            ))
         }
      </div>
    )
  }
}

export default CartAttributes
