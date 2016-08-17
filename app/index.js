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
import {AuthGlobals} from "redux-auth/default-theme"

const store = createStore(
  combineReducers({...reducers, routing: routerReducer}),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
)

const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}>
    {getRoutes(history)}
  </Provider>,
  document.getElementById('app')
)
