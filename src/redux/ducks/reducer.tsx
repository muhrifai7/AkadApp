import { combineReducers } from 'redux';

import authReducer from '../reducers/authStoreReducer';
import krsStoreReducer from "../reducers/krsStoreReducer.js"

const rootReducer = combineReducers({
    authStore: authReducer,
    krsStore: krsStoreReducer
});

export default rootReducer;