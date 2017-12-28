/**
 * Created by robbie on 8/12/17.
 */
import React from 'react';
import PropTypes from 'prop-types'
import {Provider} from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';

// how to pass a parameter in a url
const Root = ({store}) => (
    <Provider store={store}>
      <Router history={browserHistory} >
        <Route path='/(:filter)' component={App} />
        <Route path='/second' component={App} />
      </Router>
    </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;