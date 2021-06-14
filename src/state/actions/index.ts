import { ActionType } from '../action-types';

interface SelectedVideoAction {
    type: ActionType.SELECTED_VIDEO;
    payload: any;
}

interface VideosAction {
    type: ActionType.VIDEOS;
    payload: any;
}

interface SignInAction {
    type: ActionType.SIGN_IN;
    payload: String;
}

interface SignOutAction {
    type: ActionType.SIGN_OUT;
}

export type Action = SelectedVideoAction | VideosAction | SignInAction | SignOutAction;