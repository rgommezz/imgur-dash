import React from 'react';
import { connect } from 'react-redux'
import { fetchMediaDetailsRequest, cleanImageDetails } from '../actions'
import { getMediaDetails, getComments } from '../reducers'
import ImageDetail from '../components/ImageDetail'

class ImageDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMediaDetailsRequest(this.props.params.id);
  }

  componentWillUnmount() {
    this.props.cleanImageDetails();
  }

  render() {
    return (
      <ImageDetail image={this.props.image} comments={this.props.comments} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    image: getMediaDetails(state),
    comments: getComments(state)
  }
};

ImageDetailContainer = connect(
  mapStateToProps,
  { fetchMediaDetailsRequest, cleanImageDetails }
)(ImageDetailContainer);

export default ImageDetailContainer;



