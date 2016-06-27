import React from 'react'
import { connect } from 'react-redux'
import { getTopicsBasicInfo } from '../reducers'
import { Link } from 'react-router'

class TopicList extends React.Component {

  constructor(props) {
    super(props);
  }

  renderTopics() {
    const { topics } = this.props;
    return topics.map(topic => {
      return <Link key={topic.id} to={`/topics/${topic.id}`} className="topic-list__item">
          <h3 className="item__title">{topic.name}</h3>
          <p className="item__description">{topic.description}</p>
        </Link>
    });
  }

  render() {
    return (
      <div className="topic-list">
        {this.renderTopics()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    topics: getTopicsBasicInfo(state)
  }
};

TopicList = connect(
  mapStateToProps
)(TopicList);

export default TopicList;
