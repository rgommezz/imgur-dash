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

export const fetchMediaByTopicRequest = (topicId) => ({
  type: ActionTypes.FETCH_MEDIA_BY_TOPIC_REQUEST,
  topicId: topicId
});

export const fetchMediaByTopicSuccess = (media) => ({
  type: ActionTypes.FETCH_MEDIA_BY_TOPIC_SUCCESS,
  media: media
});

export const fetchMediaByTopicFailure = (error) => ({
  type: ActionTypes.FETCH_MEDIA_BY_TOPIC_FAILURE,
  error: error
});

export const fetchMediaDetailsRequest = (mediaId) => ({
  type: ActionTypes.FETCH_MEDIA_DETAILS_REQUEST,
  mediaId: mediaId
});

export const fetchMediaDetailsSuccess = (mediaDetails) => ({
  type: ActionTypes.FETCH_MEDIA_DETAILS_SUCCESS,
  mediaDetails: mediaDetails
});

export const fetchMediaDetailsFailure = (error) => ({
  type: ActionTypes.FETCH_MEDIA_DETAILS_FAILURE,
  error: error
});

export const fetchMediaCommentsSuccess = (comments) => ({
  type: ActionTypes.FETCH_MEDIA_COMMENTS_SUCCESS,
  comments: comments
});

export const fetchMediaCommentsFailure = (error) => ({
  type: ActionTypes.FETCH_MEDIA_COMMENTS_FAILURE,
  error: error
});

