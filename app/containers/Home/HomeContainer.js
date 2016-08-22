import React, {Component, PropTypes} from 'react'
import { Home } from 'components'
import { connect } from 'react-redux'

class HomeContainer extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render () {
    return (
      <Home title={this.props.title} />
    )
  }
}

function mapStateToProps ({home}) {
  return {
    title: home.get('title'),
  }
}

export default connect(mapStateToProps)(HomeContainer)
