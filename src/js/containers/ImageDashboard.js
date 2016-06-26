import React from 'react'
import { connect } from 'react-redux'
import { fetchMediaByTopicRequest } from '../actions'
import { getTopicIds } from '../reducers'

class ImageDashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    // Fetching images by topic
    const { topicIds, fetchMediaByTopicRequest } = this.props;
    if(topicIds.length) {
      fetchMediaByTopicRequest(topicIds)
    }
  }

  render() {
    const { topicIds } = this.props;
    return (
      <h1>{topicIds.length ? 'we start fetching data' : 'waiting for IDs'}</h1>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    topicIds: getTopicIds(state)
  };
};

ImageDashboard.propTypes = {
  topicIds: React.PropTypes.array.isRequired
};

ImageDashboard.defaultProps = {
  topicIds: []
};

ImageDashboard = connect(
  mapStateToProps,
  { fetchMediaByTopicRequest }
)(ImageDashboard);

export default ImageDashboard;
