import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from 'scenes/Home/Home'
import NotFound from 'scenes/NotFound'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
