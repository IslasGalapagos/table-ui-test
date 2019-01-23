import action from 'action-helper';

import data from '../persons.json';

export const changeFilter = action('CHANGE_FILTER', 'payload');
export const setPersons = action('SET_PERSONS', 'payload');
export const loaderOn = action('LOADER_ON');
export const loaderOff = action('LOADER_OFF');

export const getPersonsThunk = () => dispatch => {
  dispatch(loaderOn());

  return new Promise(resolve => {
    // ← here could be some api request
    setTimeout(() => {
      resolve(data);
    }, 1000);
  })
    .then(data => {
      dispatch(setPersons({payload: data.persons}));
      dispatch(loaderOff());
    })
    .catch(error => {
      // ← here could be some error handling
      console.log(error);
    });
};
