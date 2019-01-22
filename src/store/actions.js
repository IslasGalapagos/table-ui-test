import action from 'action-helper';

import data from '../persons.json';

export const changeFilter = action('CHANGE_FILTER', 'payload');
export const setPersons = action('SET_PERSONS', 'payload');

export const getPersonsThunk = () => dispatch =>
  Promise.resolve(data) // ← here could be some api request
    .then(data => {
      dispatch(setPersons({payload: data.persons}));
    })
    .catch(error => {
      // ← here could be some error handling
      console.log(error);
    });
