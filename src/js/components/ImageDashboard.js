import React from 'react'

export default class ImageDashboard extends React.Component {
  render() {
    return ( 
      <h1>{!this.props.isAuth ? 'Authenticating...' : 'Welcome to InstaDash!'}</h1>
    )
  }
}
