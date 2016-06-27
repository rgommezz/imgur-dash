import React from 'react'
import CommentsBox from './CommentsBox'
import Spinner from './Spinner'

class ImageDetail extends React.Component {
  constructor(props) {
    super(props);
    this.renderMedia = this.renderMedia.bind(this);
    this.renderComments = this.renderComments.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  renderMedia() {
    if (this.props.image.animated) {
      return (
        <video preload="auto" autoPlay="autoplay" loop="loop" webkit-playsinline>
          <source src={this.props.image.mp4} type="video/mp4"/>
        </video>
      )
    } else {
      return <img src={this.props.image.link}/>
    }
  }

  renderComments(){
    return this.props.comments.length ? <CommentsBox comments={this.props.comments} /> : null;
  }

  renderContent() {
    const isFetching = !Object.keys(this.props.image).length || !this.props.comments.length;
    if (isFetching) {
      return <Spinner />
    } else {
      return (
        <div className="panel">
          <div className="panel__header">
            <h3>{this.props.image.title}</h3>
          </div>
          <div className="panel__body">
            {this.renderMedia()}
          </div>
          <div className="panel__footer">
            <h4>{this.props.image.description}</h4>
          </div>
          <h3 className="comments__header">Comments</h3>
          {this.renderComments()}
        </div>
      )
    }
  }

  render() {
    return this.renderContent();
  }
}

ImageDetail.defaultProps = {
  comments: []
};

export default ImageDetail;
