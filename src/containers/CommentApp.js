import React from 'react'
import PropTypes from 'prop-types'

import '../CommentApp.css'

import Clock from '../components/Clock'
import Card from '../components/Card'
import Editor from '../components/Editor'

import CommentInput from '../containers/CommentInput'
import CommentList from '../containers/CommentList'

class CommentApp extends React.Component {
  static childContextTypes = {
    themeColor: PropTypes.string
  }

  constructor() {
    super()
    this.state = {
      isShowClock: true,
      themeColor: 'red'
    }
  }
  
  componentWillMount () {
    this.setState({ themeColor: 'green' })
  }

  toggleClockState() {
    this.setState({
      isShowClock: !this.state.isShowClock
    })
  }

  getChildContext() {
    return {
      themeColor: this.state.themeColor
    }
  }

  render() {
    return (
      <div className='wrapper'>

        {this.state.isShowClock ? <Clock /> : null}

        <button onClick={this.toggleClockState.bind(this)}>toggle</button>

        <CommentInput />
        <CommentList />

        <Card>
          <h2>React.js 小书</h2>
          <div>开源、免费、专业、简单</div>
          订阅：<input />
        </Card>

        <Editor />
      </div>
    )
  }
}

export default CommentApp
