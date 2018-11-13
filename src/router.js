import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import App from './components/App'
import Counter from './containers/Counter'
import Nav from './components/Nav'
export default () => {
  return (
    <Router>
      <React.Fragment>
        <Nav />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/counter" component={Counter} />
        </Switch>
      </React.Fragment>
    </Router>
  )
}
