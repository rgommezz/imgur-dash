const CLIENT_ID = '7c522207e67847a88ef9628b9bee6b8e';
const redirectURI = 'http://localhost:3000';
export const authURL = `https://api.instagram.com/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${redirectURI}&response_type=token`;
export const baseInstagramApiURL = 'https://api.instagram.com/v1';

