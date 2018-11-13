import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Router from './router'
import Nav from './components/Nav'
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import App from './components/App'
// import Counter from './containers/Counter'
import store from './store'

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('app')
)
