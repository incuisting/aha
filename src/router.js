import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import renderRoutes from 'utils/renderRoutes'
import App from './components/App'
import Counter from './containers/Counter'
import Nav from './components/Nav'
const routeConfig = [
  {
    path: '/',
    component: App,
    exact: true
  },
  {
    path: '/counter',
    component: Counter,
    exact: true
  }
]

export default () => {
  return (
    <Router>
      <React.Fragment>
        <Nav />
        {renderRoutes(routeConfig)}
      </React.Fragment>
    </Router>
  )
}
