const rootUrl = 'https://api.imgur.com/3';

export const endPoints = {
  topics: `${rootUrl}/topics/defaults`,
  mediaByTopic: (id) => `${rootUrl}/topics/${id}`
};

export const ActionTypes = {
  FETCH_TOPICS_REQUEST: 'FETCH_TOPICS_REQUEST',
  FETCH_TOPICS_SUCCESS: 'FETCH_TOPICS_SUCCESS',
  FETCH_TOPICS_FAILURE: 'FETCH_TOPICS_FAILURE',
  FETCH_MEDIA_BY_TOPIC_REQUEST: 'FETCH_MEDIA_BY_TOPIC_REQUEST',
  FETCH_MEDIA_BY_TOPIC_SUCCESS: 'FETCH_MEDIA_BY_TOPIC_SUCCESS',
  FETCH_MEDIA_BY_TOPIC_FAILURE: 'FETCH_MEDIA_BY_TOPIC_FAILURE'
};

