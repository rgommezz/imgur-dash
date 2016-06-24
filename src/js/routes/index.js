import React from 'react'
import { Route } from 'react-router'
import App from '../components/App'
import { authURL } from '../constants'

function checkAccessToken(nextState, replace) {
  // We need an access token to start using the instagram API!
  const { hash } = nextState.location;
  if (hash) {
    window.localStorage['accessToken'] = hash.split('=')[1];
    replace({
      pathname: '/'
    });
  } else if(!window.localStorage['accessToken']){
    // Redirect to authentication process
    window.location.assign(authURL);
  }
}

export default (
  <Route path="/" component={App} onEnter={checkAccessToken} >
    
  </Route>
)
