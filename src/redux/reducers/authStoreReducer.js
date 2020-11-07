const defaultState = {
  data: [],
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'POST_LOGIN': {
      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      return state;
  }
};
