import {Account, POST_LOGIN, AccountActionTypes} from '../types/accountTypes';
import {login} from '../api/auth';

export const postLogin = (data) => {
  return async (dispatch) => {
    try {
      const response = await login(data);
      return dispatch({
        type: POST_LOGIN,
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
