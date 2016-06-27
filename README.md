ImgurDash
=========

### Usage

The app gets public data from [imgur.com](http://imgur.com/). In order to use the app locally, you need to get a clientId from imgur in the first place. The steps that need to be performed are as follows: 
  
1. Create a ```secrets.js``` file inside ```/src/js/``` folder 
2. Inside the file export a constant as such:
```
export const clientId = "YOUR_CLIENT_ID";
```
  
You can get your Client-ID from https://imgur.com/signin?redirect=http://api.imgur.com/oauth2/addclient    

After that, open a CLI and type:  

```
cd path_to_your_root
npm install
npm start
open http://localhost:3000
```

### Dependencies

* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)
