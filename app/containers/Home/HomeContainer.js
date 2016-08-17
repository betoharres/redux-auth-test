import React, {Component, PropTypes} from 'react'
import { Home } from 'components'
import { connect } from 'react-redux'
import { fromJS, Map } from 'immutable'

class HomeContainer extends Component {

  // static propTypes = {
  //   schedules: PropTypes.instanceOf(Map).isRequired,
  // }

  render () {
    return (
      <Home schedules={this.props.schedules} />
    )
  }
}

// function mapStateToProps ({buses}) {
//   return {
//     schedules: buses.get('schedules'),
//   }
// }
//
// export default connect(mapStateToProps)(HomeContainer)

export default HomeContainer
