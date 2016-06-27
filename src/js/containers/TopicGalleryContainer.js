import React from 'react'
import { connect } from 'react-redux'
import { fetchMediaByTopicRequest, cleanGallery } from '../actions'
import { getTopicIds, getMediaByTopic } from '../reducers'
import TopicGallery from '../components/TopicGallery'

class TopicGalleryContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMediaByTopicRequest(this.props.params.id);
  }

  componentWillReceiveProps(nextProps) {
    // Changing topic, querying media for the new one selected
    if (this.props.params.id !== nextProps.params.id) {
      this.props.fetchMediaByTopicRequest(nextProps.params.id);
    }
  }

  componentWillUnmount() {
    this.props.cleanGallery();
  }
  
  render() {
    return (
      <TopicGallery media={this.props.media} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    topicIds: getTopicIds(state),
    media: getMediaByTopic(state)
  };
};

TopicGalleryContainer.propTypes = {
  topicIds: React.PropTypes.array.isRequired,
  media: React.PropTypes.array.isRequired
};

TopicGalleryContainer.defaultProps = {
  topicIds: [],
  media: []
};

TopicGalleryContainer = connect(
  mapStateToProps,
  { fetchMediaByTopicRequest, cleanGallery }
)(TopicGalleryContainer);

export default TopicGalleryContainer;
