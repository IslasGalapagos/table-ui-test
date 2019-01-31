import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './store/reducer';
import Container from './components/Container';

const store = createStore(reducer, undefined, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('app'),
);
