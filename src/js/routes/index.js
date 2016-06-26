import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../containers/App'
import ImageDashboard from '../containers/ImageDashboard'
import TopicList from '../containers/TopicList'

export default (
  <Route path="/" component={App} >
    <IndexRoute component={TopicList} />
    <Route path="topic/:id" component={ImageDashboard} />
  </Route>
)
