import React, {PropTypes} from 'react'
import { fromJS } from 'immutable'
import FlatButton from 'material-ui/FlatButton'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default function Home (props) {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div>Home</div>
    </ MuiThemeProvider>
  )

}
