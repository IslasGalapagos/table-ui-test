import action from 'action-helper';

import data from '../persons.json';

export const changeFilterAction = action('CHANGE_FILTER', 'payload');
export const setPersonsAction = action('SET_PERSONS', 'payload');
export const loaderOnAction = action('LOADER_ON');
export const loaderOffAction = action('LOADER_OFF');

export const getPersonsThunk = () => (dispatch) => {
  dispatch(loaderOnAction());

  return new Promise((resolve) => {
    // ← here could be some api request
    setTimeout(() => {
      resolve(data);
    }, 1000);
  })
    .then((receivedData) => {
      dispatch(setPersonsAction({ payload: receivedData.persons }));
      dispatch(loaderOffAction());
    })
    .catch(() => {
      // ← here could be some error handling
    });
};
