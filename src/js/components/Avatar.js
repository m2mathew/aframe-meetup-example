import {Entity} from 'aframe-react'
import React, {Component} from 'react'

export default class Avatar extends Component {
  render () {
    const { width, height, depth, photoUrl } = this.props
    const { x, y, z } = this.props.position

    return (
      <Entity geometry={{'primitive': 'box', width: width, height: height, depth: depth}}
              material={{src: `url(${photoUrl})`, color: `#${this.props.color || 'ffffff'}`}}
              position={`${x} ${y} ${z}`}
              onClick={() => {this.props.onClick(this.props.id) }} />
    );
  }
}
