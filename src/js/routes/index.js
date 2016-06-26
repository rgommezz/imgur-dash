import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../containers/App'
import ImageDashboard from '../containers/ImageDashboard'

export default (
  <Route path="/" component={App} >
   <IndexRoute component={ImageDashboard} />
  </Route>
)
