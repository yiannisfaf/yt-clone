import { ActionType } from '../action-types';
import { Action } from '../actions';

interface authReducerState {
    isSignedIn: Boolean;
    userId: String;
};

const initialState = {
    isSignedIn: false,
    userId: "",
};

const reducer = (state: authReducerState=initialState, action: Action): authReducerState => {
    switch(action.type) {
        case ActionType.SIGN_IN:
            return { ...state, isSignedIn: true, userId: action.payload };
        case ActionType.SIGN_OUT:
            return { ...state, isSignedIn: false, userId: "" };
        default:
            return state;
    }
};

export default reducer;