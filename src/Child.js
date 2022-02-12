import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    return (
      <div
        onClick={() => this.props.handleColorChange(getRandomColor())}
        className="child"
        style={{ backgroundColor: this.props.color }}
      ></div>
    )
  }
}

export default Child


//child class
//handleColorChange changes c olor when clicked will start as white ("FFF")
//and change to a random color

