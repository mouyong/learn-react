import React from 'react'

export default class Editor extends React.Component {
  constructor() {
    super()
    this.state = {
      content: '<h1>some content</h1>'
    }
  }
  
  render() {
    return (
      <div className="editor-wrapper" dangerouslySetInnerHTML={{__html: this.state.content}}>
      </div>
    )
  }
}
