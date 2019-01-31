import {
  changeFilterAction,
  setPersonsAction,
  loaderOnAction,
  loaderOffAction,
} from './actions';
import Gender from '../components/Header/Gender';

const initialState = {
  filters: {
    search: '',
    gender: Gender.values[0].key,
    age: 0,
  },
  persons: [],
  loader: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case changeFilterAction.type:
      return { ...state, filters: { ...state.filters, ...action.payload } };

    case setPersonsAction.type:
      return { ...state, persons: action.payload };

    case loaderOnAction.type:
      return { ...state, loader: true };

    case loaderOffAction.type:
      return { ...state, loader: false };

    default:
      return state;
  }
};

export default reducer;
