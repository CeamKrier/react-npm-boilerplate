import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Stepsy from '../../src/js/Container'

export default class Root extends Component {
  render () {
    return (
      <div>
        <Stepsy />
      </div>
    )
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('main')
)
