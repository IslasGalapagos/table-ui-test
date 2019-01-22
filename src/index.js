import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducer';
import App from './components/App';

const stateFromLS = localStorage.getItem('storeState');
const preloadStore =
  stateFromLS !== null
    ? JSON.parse(stateFromLS)
    : undefined;

const store = createStore(reducer, preloadStore);

store.subscribe(() => {
  localStorage.setItem(
    'storeState',
    JSON.stringify({
      sortingValue: store.getState().sources.sortingValue
    })
  );
});

render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('app')
);
