import {GetKrs} from '../api/krs';

export function getKrs() {
  return async (dispatch) => {
    const result = await GetKrs();
    dispatch({
      type: 'GET_ARTICLE',
      payload: result,
    });
  };
}
