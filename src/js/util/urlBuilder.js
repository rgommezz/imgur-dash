import { baseInstagramApiURL } from '../constants'

export function tags(query) {
  const ACCESS_TOKEN = window.localStorage['accessToken'];
  return `${baseInstagramApiURL}/tags/search?q=${query}&access_token=${ACCESS_TOKEN}`;
}

export function media(tagName) {
  const ACCESS_TOKEN = window.localStorage['accessToken'];
  return `${baseInstagramApiURL}/tags/${tagName}/media/recent?access_token=${ACCESS_TOKEN}`;
}
