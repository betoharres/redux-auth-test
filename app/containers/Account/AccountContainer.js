import React, { Component, PropTypes } from 'react'
import { Theme } from 'constants'
import { connect } from 'react-redux';

class AccountContainer extends Component {
  render () {
    return (
      <div>
        <h1>Account page</h1>
        <p>This page should only visible to authenticated users.</p>
        <Theme.SignOutButton next={() => this.context.router.push('/')} />
      </div>
    )
  }
}

AccountContainer.contextTypes = { router: PropTypes.object.isRequired }

export default connect()(AccountContainer)
