import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    {console.log(store)}
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();
