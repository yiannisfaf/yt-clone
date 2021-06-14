import React, { useEffect } from 'react';
import { useGoogleApi } from 'react-gapi';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypeSelector';


const GoogleAuth = () => {
    const { signIn, signOut } = useActions();
    const { isSignedIn } = useTypedSelector((state) => state.auth);
    let auth:any;

    const gapi = useGoogleApi({
        scopes: [
            'profile',
        ] as any,
    });

    auth = gapi?.auth2.getAuthInstance();


    const onSignInClick = () => {
        auth.signIn();
        signIn(auth.currentUser.get().getId());
    };

    const onSignOutClick = () => {
        auth.signOut();
        signOut();
    };


    const renderAuthButton = () => {
        if (isSignedIn) {
            return (
                <button className="signin__button" onClick={onSignOutClick}>
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button className="signin__button" onClick={onSignInClick}>
                    <i className="google icon" />
                    Sign In With Google
                </button>
            );
        }
    }

    return (
        <div>
            {renderAuthButton()}
        </div>
    );
};

export default GoogleAuth;