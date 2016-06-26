import { ActionTypes } from '../constants'

export const fetchTopicsRequest = () => ({
  type: ActionTypes.FETCH_TOPICS_REQUEST
});

export const fetchTopicsSuccess = (topics) => ({
  type: ActionTypes.FETCH_TOPICS_SUCCESS,
  topics: topics
});

export const fetchTopicsFailure = (error) => ({
  type: ActionTypes.FETCH_TOPICS_FAILURE,
  error: error
});

export const fetchMediaByTopicRequest = (topicIds) => ({
  type: ActionTypes.FETCH_MEDIA_BY_TOPIC_REQUEST,
  topicIds: topicIds
});

export const fetchMediaByTopicSuccess = (media) => ({
  type: ActionTypes.FETCH_MEDIA_BY_TOPIC_SUCCESS,
  media: media
});

export const fetchMediaByTopicFailure = (error) => ({
  type: ActionTypes.FETCH_MEDIA_BY_TOPIC_FAILURE,
  error: error
});
