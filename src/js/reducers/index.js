import { ActionTypes } from '../constants'
import _ from 'underscore'

/**
 * The state shape is meant to be a simple structure to hold volatile data, considering the random characteristic of the app + read only
 * Otherwise a more appropriate structure had been chosen, such as a normalized tree with entities separation, following a db pattern
 * @type {{topics: Array, media: Array}}
 */

const initialState = {
  topics: [],
  media: [],
  mediaDetails: {},
  comments: []
};

function getRandomTopics(topics) {
  return _.sample(topics, 5);
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TOPICS_SUCCESS:
      return {...state, ...{topics: getRandomTopics(action.topics)}};
    case ActionTypes.FETCH_MEDIA_BY_TOPIC_SUCCESS:
      const mediaNoAlbum = action.media
        .filter(item => !item['is_album']) // Filtering out albums. We are only interested in single photos or videos
        .slice(0, 20);
      return {...state, ...{media: mediaNoAlbum}};
    case ActionTypes.FETCH_MEDIA_DETAILS_SUCCESS:
      return {...state, ...{mediaDetails: action.mediaDetails}};
    case ActionTypes.FETCH_MEDIA_COMMENTS_SUCCESS:
      // For simplicity we are not taking into account nested comments
      return {...state, ...{comments: action.comments}};
    case ActionTypes.CLEAN_GALLERY:
      return {...state, ...{media: []}};
    case ActionTypes.CLEAN_IMAGE_DETAILS:
      return {...state, ...{mediaDetails: {}, comments: []}};
    default:
      return state;
  }
};

// Selectors, that will return the data required by the UI

export const getTopicIds = (state) => {
  return state.topics.map(topic => topic.id);
};

// pick selects a subset of properties from each object
export const getTopicsBasicInfo = (state) => {
  return state.topics.map(topic => _.pick(topic, 'id', 'name', 'description'));
};

export const getMediaByTopic = (state) => {
  return state.media;
};

export const getMediaDetails = (state) => {
  return state.mediaDetails;
};

export const getComments = (state) => {
  return state.comments.map(comment => _.pick(comment, 'author', 'comment', 'ups', 'id'));
};

export default rootReducer;
