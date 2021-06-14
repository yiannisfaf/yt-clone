import React, { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const useVideo = (defaultSearchTerm: string) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term: string) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
            }
        });

        setVideos(response.data.items);
    };

    return [videos, search];
};

export default useVideo;