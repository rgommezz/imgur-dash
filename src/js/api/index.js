import 'whatwg-fetch'
import {endPoints} from '../constants'
import { clientId } from '../secrets'

export default function callApi(endPoint) {
  return fetch(endPoint, {
    headers: {
      'Authorization': 'Client-ID ' + clientId
    }
  })
  .then(response =>
    response.json().then(json => ({ json, response }))
  ).then(({ json, response }) => {
    if (!response.ok) { // code != 2xx
      return Promise.reject(json)
    }
    return json
  })
  .catch(error => ({error: error.message || 'Something bad happened during the request'}));
}

export const fetchDefaultTopics = () => callApi(endPoints.topics);

export const fetchMediaByTopic = (id) => callApi(endPoints.mediaByTopic(id));

export const fetchMediaDetails = (id) => callApi(endPoints.mediaDetails(id));

export const fetchMediaComments = (id) => callApi(endPoints.mediaComments(id));
