import React, { Component, PropTypes } from 'react'
import { Theme } from 'constants'
import { connect } from 'react-redux';

class LoginContainer extends Component {
  render () {
    return (
      <div>
        <h1>Login</h1>
        <Theme.EmailSignInForm next={() => this.context.router.push('/account')} />
      </div>
    )
  }
}

LoginContainer.contextTypes = { router: PropTypes.object.isRequired }

export default connect()(LoginContainer)
