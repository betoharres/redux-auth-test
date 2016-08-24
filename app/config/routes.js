import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'

import {
        MainContainer,
        HomeContainer,
        AccountContainer,
        LoginContainer
} from 'containers'

export default function getRoutes(history, checkAuth) {
  return (
    <Router history={history}>
      <Router path='/' component={MainContainer}>
        <IndexRoute component={HomeContainer} />
        <Route path='login' component={LoginContainer} onEnter={checkAuth} />
        <Route path='account' component={AccountContainer} onEnter={checkAuth} />
      </Router>
    </Router>
  )
}

