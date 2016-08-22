import React, { Component, PropTypes } from 'react'
import { Theme } from 'constants'

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

class MainContainer extends Component {

  render () {
    return (
      <div>
        <Theme.AuthGlobals />
        {this.props.children}
      </div>
    )
  }
}

export default MainContainer
