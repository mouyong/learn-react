import React from 'react'

export default class Clock extends React.Component {
  constructor() {
    super()
    this.state = {
      date: new Date(),
      isShowClock: true,
    }
  }

  componentWillMount() {
    this.timmer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }

  componentWillUnmount() {
    console.log(this.timmer)

    clearInterval(this.timmer)
  }

  render() {
    return (
      <div>
        <div>
          {this.state.date.toLocaleTimeString()}
        </div>

      </div>
    )
  }
}
