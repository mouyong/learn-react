import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

class CommentList extends React.Component {
  static defaultProps = {
    comments: []
  }

  static contextTypes = {
    themeColor: PropTypes.string
  }
 
  render() {
    return (
      <div style={{color:this.context.themeColor}}>
        {
          this.props.comments.map((comment, index) => <Comment key={index} comment={comment} />)
        }
      </div>
    )
  }
}

export default CommentList
