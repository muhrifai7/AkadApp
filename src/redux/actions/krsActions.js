import {GetKrs, DeleteKrs} from '../api/krs';

export function getKrs() {
  return async (dispatch) => {
    const result = await GetKrs();
    dispatch({
      type: 'GET_ARTICLE',
      payload: result,
    });
  };
}

export function deleteKrs(id) {
  console.log(id, 'ididididid');
  return async (dispatch) => {
    const result = await DeleteKrs(id);
    dispatch({
      type: 'DELETE_KRS',
      payload: result,
      id: id,
    });
  };
}
