import React from 'react'
import PropTypes from 'prop-types'

class CommentInput extends React.Component {
  static propTypes = {
    username: PropTypes.any,
    onSubmit: PropTypes.func,
    onUserNameInputBlur: PropTypes.func
  }

  static defaultProps = {
    username: ''
  }

  constructor (props) {
    super(props)
    this.state = {
      username: props.username, // 从 props 上取 username 字段
      content: ''
    }
  }

  componentDidMount() {
    this.textarea.focus()
  }

  handleUsernameChange(evt) {
    this.setState({
      username: evt.target.value
    })
  }

  handleUsernameBlur(evt) {
    if(this.props.onUserNameInputBlur) {
      this.props.onUserNameInputBlur(evt.target.value)
    }
  }

  handleContentChange(evt) {
    this.setState({
      content: evt.target.value
    })
  }

  handleSubmit() {
    if (this.props.onSubmit) {
      const { username, content } = this.state
      this.props.onSubmit({
        username,
        content,
        created_at: +new Date()
      })
    }
    this.setState({ content: '' })
  }

  render() {
    return (
      <div className='comment-input'>
          <div className='comment-field'>
            <span className='comment-field-name'>用户名：</span>
            <div className='comment-field-input'>
              <input
                value={this.state.username}
                onChange={this.handleUsernameChange.bind(this)}
                onBlur={this.handleUsernameBlur.bind(this)}
              />
            </div>
          </div>
          <div className='comment-field'>
            <span className='comment-field-name'>评论内容：</span>
            <div className='comment-field-input'>
              <textarea
                ref={(textarea) => this.textarea = textarea}
                value={this.state.content}
                onChange={this.handleContentChange.bind(this)}
              />
            </div>
          </div>
          <div className='comment-field-button'>
            <button onClick={this.handleSubmit.bind(this)}>
              发布
            </button>
          </div>
        </div>
    )
  }
}

export default CommentInput
