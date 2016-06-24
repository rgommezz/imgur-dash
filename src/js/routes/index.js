import React from 'react'
import { Route } from 'react-router'
import App from '../components/App'
import { authURL } from '../constants'

/**
 * Hook to manage Instagram authentication and authorization
 * @see https://www.instagram.com/developer/authentication/
 * For simplicity (although less secure), we are leveraging Client-Side (Implicit) Authentication
 * Once we login and authorize through Instagram, it will append the access_token in the URL fragment as part of the hash
 * in our case, http://localhost:3000/#access_token=ACCESS-TOKEN
 *
 * @param nextState
 * @param replace
 */
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
