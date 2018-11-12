import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import App from './components/App'
import Counter from './containers/Counter'
export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/counter" component={Counter} />
      </Switch>
    </Router>
  )
}
