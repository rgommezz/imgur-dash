import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../containers/App'
import TopicGalleryContainer from '../containers/TopicGalleryContainer'
import TopicList from '../containers/TopicList'
import ImageDetailContainer from '../containers/ImageDetailContainer'

export default (
  <Route path="/" component={App} >
    <IndexRoute component={TopicList} />
    <Route path="topics/:id" component={TopicGalleryContainer} />
    <Route path="images/:id" component={ImageDetailContainer} />
  </Route>
)
