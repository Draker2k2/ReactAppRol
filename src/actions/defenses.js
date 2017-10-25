import axios from 'axios';

export const ACTION_TYPES = {
  FETCH_DATA: 'DEFENSES_fetch_data',
  FETCH_DATA_SUCCESFULL: 'DEFENSES_fetch_data_succesfull',
  FETCH_DATA_ERROR: 'DEFENSES_fetch_data_error',
  INCREMENT_DEFENSE: 'incrementDefense',
  CALCULATE_BONUS: 'DEFENSES_calculate_bonus',
};

const PORT = process.env.PORT || 3000;

export const getData = () => (dispatch) => {
  const request = axios(`http://localhost:${PORT}/defenses/`);
  dispatch({ type: ACTION_TYPES.FETCH_DATA });
  request
  .then((response) => {
    dispatch({ type: ACTION_TYPES.FETCH_DATA_SUCCESFULL, payload: response.data });
    dispatch({ type: ACTION_TYPES.CALCULATE_BONUS });
  })
  .catch((error) => {
    dispatch({ type: ACTION_TYPES.FETCH_DATA_ERROR, payload: error.message });
  });
};
