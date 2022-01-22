import React from 'react'
import './Categories.css'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class Categories extends React.Component {
  constructor (props) {
    super(props)
    this.selectHandler = this.selectHandler.bind(this)
    this.state = { filter: this.props.location.pathname.replace('/', '') || 'all' }
    this.types = ['all', 'tech', 'clothes']  
  }

  selectHandler (type) {
    this.setState({ filter: type })
  }

  render () {
    const filter = this.state.filter
    return (
      <div className="categories">
        {this.types.map((item) => {
          return (
          <Link key={item}
            className={filter === item ? 'selected' : ''}
            to={'/' + item}
            onClick ={(e) => { this.selectHandler(e.target.innerHTML) }}
          >
           {item}
          </Link>
          )
        })}
      </div>
    )
  }
}

export default withRouter(Categories)
