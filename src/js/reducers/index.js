import { ActionTypes } from '../constants'
import _ from 'underscore'

const initialState = {
  topics: [],
  media: []
};

function getRandomTopics(topics) {
  return _.sample(topics, 5);
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TOPICS_SUCCESS:
      return {...state, ...{topics: getRandomTopics(action.topics)}};
    case ActionTypes.FETCH_MEDIA_BY_TOPIC_SUCCESS:
      console.log(action.media);
      const mediaNoAlbum = action.media
        .filter(item => !item['is_album'])
        .slice(0, 20);
      return {...state, ...{media: mediaNoAlbum}};
    default:
      return state;
  }
};

// Selectors, that will return the data required by the UI

export const getTopicIds = (state) => {
  return state.topics.map(topic => topic.id);
};

export const getTopicsBasicInfo = (state) => {
  return state.topics.map(topic => _.pick(topic, 'id', 'name', 'description'));
};

export const getMediaByTopic = (state) => {
  return state.media;
};

export default rootReducer;
