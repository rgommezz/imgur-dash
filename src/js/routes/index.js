import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../containers/App'
import TopicGalleryContainer from '../containers/TopicGalleryContainer'
import TopicList from '../containers/TopicList'

export default (
  <Route path="/" component={App} >
    <IndexRoute component={TopicList} />
    <Route path="topic/:id" component={TopicGalleryContainer} />
  </Route>
)
