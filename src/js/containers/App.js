import React from 'react';
import { connect } from 'react-redux'
import Header from '../components/Header'
import { fetchTopicsRequest } from '../actions'
import { getTopicsBasicInfo } from '../reducers'


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTopicsRequest();
  }

  render() {
    return (
      <div id="app-container">
        <Header title="ImgurDash" topics={this.props.list} location={this.props.location} />
        <div id="main">
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: getTopicsBasicInfo(state)
  };
};

App = connect(
  mapStateToProps,
  { fetchTopicsRequest }
)(App);

export default App;






