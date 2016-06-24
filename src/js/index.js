// React imports
import React from 'react';
import { render } from 'react-dom';
import { browserHistory} from 'react-router'

// app specific imports
import Root from './components/Root';
import routes from './routes'
import configureStore from './store/configureStore'

// store singleton instantiation
const store = configureStore();

render(
  <Root
    store={store}
    history={browserHistory}
    routes={routes} />,
  document.getElementById('root')
);
