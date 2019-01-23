import {changeFilter, setPersons, loaderOn, loaderOff} from './actions';
import Gender from '../components/Header/Gender';

const initialState = {
  filters: {
    search: '',
    gender: Gender.values[0].key,
    age: 0
  },
  persons: [],
  loader: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case changeFilter.type:
      return {...state, filters: {...state.filters, ...action.payload}};

    case setPersons.type:
      return {...state, persons: action.payload};

    case loaderOn.type:
      return {...state, loader: true};

    case loaderOff.type:
      return {...state, loader: false};

    default:
      return state;
  }
};

export default reducer;
