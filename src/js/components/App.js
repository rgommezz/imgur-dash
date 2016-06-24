import React from 'react';

const App = React.createClass({
  render() {
    const isAuth = typeof window.localStorage['accessToken'] !== 'undefined';
    return (
      <h1>{!isAuth ? 'Authenticating...' : 'Welcome to instaDash!'}</h1>
    );
  }
});

export default App;

