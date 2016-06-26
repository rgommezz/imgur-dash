import React from 'react'
import {Link} from 'react-router'

class ImagePreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovering: false
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({hovering: true})
  }

  handleMouseLeave() {
    this.setState({hovering: false})
  }

  inset() {
    return <div className="preview--hover">
      Views: {this.props.views}
      <br />
      Upvotes: {this.props.ups}
    </div>
  }

  image() {
    return <img className="preview__image" src={`http://i.imgur.com/${this.props.id}h.jpg`}/>
  }

  video() {
    return (
      <div>
        <video className="preview__video" preload="auto" autoPlay="autoplay" loop="loop" webkit-playsinline>
          <source src={this.props.mp4} type="video/mp4"/>
        </video>
      </div>
    )
  }

  render() {
    return (
      <Link
        to={`images/${this.props.id}`}
        className="preview"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
        {this.props.animated && this.state.hovering ? this.video() : this.image()}
        {this.state.hovering ? this.inset() : null}
      </Link>
    );
  }

}

export default ImagePreview;


