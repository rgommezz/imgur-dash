import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { ActionTypes } from '../constants'
import * as api from '../api'

export function *fetchTopics() {
  try {
    // querying list of default topics
    const { data } = yield call(api.fetchDefaultTopics);
    yield put({type: ActionTypes.FETCH_TOPICS_SUCCESS, topics: data});
  } catch(error) {
    yield put({type: ActionTypes.FETCH_TOPICS_FAILURE, message: error.message});
  }
}

export function *fetchMediaByTopic(action) {
  try {
    // concurrently querying media by topic
    const sideEffectsArr = action.topicIds.map(id => call(api.fetchMediaByTopic, id));
    const [media1, media2, media3, media4, media5] = yield sideEffectsArr;
  } catch(error) {
    yield put({type: ActionTypes.FETCH_MEDIA_BY_TOPIC_FAILURE, message: error.message})
  }
}

export function *watchFetchTopics() {
  yield call(takeEvery, ActionTypes.FETCH_TOPICS_REQUEST, fetchTopics);
}

export function *watchFetchMedia() {
  yield call(takeEvery, ActionTypes.FETCH_MEDIA_BY_TOPIC_REQUEST, fetchMediaByTopic);
}

export default function* root() {
  yield [
    watchFetchTopics(),
    watchFetchMedia()
  ]
}
