import 'whatwg-fetch'

export default function callApi(endPoint) {
  return fetch(endPoint)
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
