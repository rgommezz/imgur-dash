import React from 'react';
import Header from './Header'

export default class App extends React.Component {

  render() {
    const isAuth = typeof window.localStorage['accessToken'] !== 'undefined';
    
    return (
      <div>
        <Header title="InstaDash" />
        <div id="main">
          {React.cloneElement(this.props.children, {isAuth: isAuth})}
        </div>
      </div>
    );
  }
}






