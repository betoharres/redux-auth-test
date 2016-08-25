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
    if (isAuthed === true) {
      isAuthed ? replace('/') : null
    }
  }
}

// configure redux-auth BEFORE rendering the page
function renderApp ({cookies, isServer, cleanSession, currentLocation, userAgent} = {}) {

  const history = syncHistoryWithStore(hashHistory, store)
  const routes = getRoutes(history, checkAuth)

  return store.dispatch(configure(
    [
      {
        default: {
          apiUrl: "http://devise-token-auth-demo.dev"
        }
      }
    ], {
      clientOnly: true,
      isServer: false,
      cleanSession,
      cookies,
      currentLocation
  })).then(({redirectPath, blank} = {}) => {

    return ({
      blank,
      store,
      history,
      routes,
      redirectPath,
      provider: (
        <Provider store={store} key="provider" children={routes} />
      )
    });
  });
}

const reactRoot = window.document.getElementById('app');

renderApp().then(({provider}) => {
  ReactDOM.render(provider, reactRoot)
})
