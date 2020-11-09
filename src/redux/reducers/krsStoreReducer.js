const defaultState = {
  data: [],
  isFetching: false,
};

export default (state = defaultState, {type, payload, id} = {}) => {
  switch (type) {
    case 'GET_ARTICLE': {
      return {
        ...state,
        data: payload,
        isFetching: true,
      };
    }
    case 'DELETE_KRS': {
      let dataState = state.data.filter((value) => {
        return value.id !== id;
      });
      return {
        ...state,
        data: dataState,
      };
    }
    default:
      return state;
  }
};
