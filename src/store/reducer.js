import {changeFilter, setPersons} from './actions';

const initialState = {
  filters: {
    search: '',
    gender: 'all',
    age: 0
  },
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case changeFilter.type:
      return {...state, filters: {...state.filters, ...action.payload}};

    case setPersons.type:
      return {...state, persons: action.payload};

    default:
      return state;
  }
};

export default reducer;
