import React from 'react'
import ReactDOM from 'react-dom'
import getRoutes from './config/routes'
import { createStore,
         applyMiddleware,
         compose,
         combineReducers } from 'redux'
import { Provider } from 'react-redux'
import * as reducers from 'redux/modules'
import thunk from 'redux-thunk'
import { routerReducer,
         syncHistoryWithStore } from 'react-router-redux'

import { hashHistory } from 'react-router'

import {configure, authStateReducer} from "redux-auth"

const store = createStore(
  combineReducers({...reducers, auth: authStateReducer, routing: routerReducer}),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
)

const history = syncHistoryWithStore(hashHistory, store)

function checkIfAuthed (store) {
  return store.getState().auth.getIn(['user', 'isSignedIn'])
}

function checkAuth (nextState, replace) {
  const isAuthed = checkIfAuthed(store)
  const nextPath = nextState.location.pathname

  if (nextPath === '/account/') {
    if (isAuthed === false) {
      replace('login')
    }
  } else if (nextPath === '/login/') {
    isAuthed ? replace('/') : null
  }
}


function renderApp ({cookies, isServer, currentLocation} = {}) {
  // configure redux-auth BEFORE rendering the page
  return store.dispatch(configure(
    // use the FULL PATH to your API
    {apiUrl: "http://devise-token-auth-demo.dev"},
    {clientOnly: true, isServer, cookies, currentLocation}
  )).then(({redirectPath, blank} = {}) => {
    if (blank) {
      // if `blank` is true, this is an OAuth redirect and should not
      // be rendered
      return <noscript />;
    } else {
      return (
        <Provider store={store} key="provider" children={getRoutes(history, checkAuth)} />
      );
    }
  });
}

renderApp().then(appComponent => {
  ReactDOM.render(appComponent, document.getElementById('app'))
})

