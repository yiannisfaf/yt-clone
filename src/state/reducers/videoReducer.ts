import { ActionType } from '../action-types';
import { Action } from '../actions';

interface videoReducerState {
    video: any;
    videos: any;
};

const initialState = {
    video: "",
    videos: [],
};

const reducer = (state: videoReducerState=initialState, action: Action): videoReducerState => {
    switch(action.type) {
        case ActionType.SELECTED_VIDEO:
            return { ...state, video: action.payload };
        case ActionType.VIDEOS:
            return { ...state, videos: action.payload };
        default: 
            return state;
    }
};

export default reducer;