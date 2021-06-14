import { combineReducers } from 'redux';
import videoReducer from './videoReducer';
import authReducer from './authReducer';

const reducers = combineReducers({
    videos: videoReducer,
    auth: authReducer
});

export default reducers;

//Typescript code to ensure reducers is correctly typed.
export type RootState = ReturnType<typeof reducers>;