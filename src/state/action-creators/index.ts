import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const selectedVideo = (video: any) => (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SELECTED_VIDEO, payload: video });
};

export const storeVideos = (videos: any) => (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.VIDEOS, payload: videos });
};

export const signIn = (userId: String) => (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SIGN_IN, payload: userId });
};

export const signOut = () => (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SIGN_OUT });
};