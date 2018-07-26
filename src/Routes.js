import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from 'scenes/Home'
import NotFound from 'scenes/NotFound'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Routes
