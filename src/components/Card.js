import React from 'react'

export default class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className='sidebar'>
            {this.props.children[0]}
          </div>
          
          <div className='main'>
            {this.props.children[1]}
          </div>
  
        </div>
      </div>
    )
  }
}
