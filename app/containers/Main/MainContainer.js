import React, { Component, PropTypes } from 'react'

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

class MainContainer extends Component {

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default MainContainer
