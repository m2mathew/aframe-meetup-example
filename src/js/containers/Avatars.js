import {Entity} from 'aframe-react'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import Avatar from '../components/Avatar'
import { circularPositionFromIndex } from '../utils/calculations'

const boxSize = 0.5

class Avatars extends Component {
  render () {
    let members = this.props.members
    return (
      <Entity>
        {members.map((member, index) => {
          let position = circularPositionFromIndex(index, boxSize)
          return (
            <Avatar key={member.id} id={member.id} name={member.name} photoUrl={member.photo_url}
                    width={boxSize} height={boxSize} depth={boxSize}
                    position={position}
                    index={index} />
          )
        })}
      </Entity>
    );
  }
}

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  return {
    members: state.members
  }
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avatars)