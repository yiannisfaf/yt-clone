import React, { useState, useEffect } from 'react';
import { GoogleApiProvider } from 'react-gapi';
import { Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../state';

import Header from './Header';
import Sidebar from './Sidebar';
import VideoHome from './VideoHome';
import VideoPlayer from './VideoPlayer';
import useVideo from '../hooks/useVideo';

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState<any>(null);
    const [videos, search] = useVideo('football');

    useEffect(() => {
        setSelectedVideo(videos);
    }, [videos]);

    return (
        <Provider store={store}>
            <GoogleApiProvider clientId={"233488403329-crj217n2nedkvhtmodg022qia01mnse7.apps.googleusercontent.com"}>
                <div className="container">
                    <BrowserRouter>
                        <Header onFormSubmit={search} />
                        <div className="content">
                            <Switch>
                                <Route path="/" exact>
                                    <Sidebar />
                                    <VideoHome videos={videos} />
                                </Route>
                                <Route path="/:id" exact>
                                    <VideoPlayer />
                                </Route>
                            </Switch>
                        </div>
                    </BrowserRouter>
                </div>
            </GoogleApiProvider>
        </Provider>
    );
};

export default App;