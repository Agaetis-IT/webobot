import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from 'scenes/Home/Home'
import Project from 'scenes/Project/Project'
import Contribute from 'scenes/Contribute/Contribute'
import NotFound from 'scenes/NotFound'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/project" component={Project} />
    <Route path="/contribute" component={Contribute} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
