import React, { useState, useEffect } from 'react';
import axios from 'axios';

const KEY = 'AIzaSyCROr5frCuNJmWG0xiAnz9gi1b-xYw7QFw';

const useSubs = (defaultSearchTerm: String) => {
    const [subs, setSubs] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term: String) => {
        const response = await axios.create({
            baseURL: "https://www.googleapis.com/youtube/v3",
            params: {
                part: 'snippet',
                maxResults: 8,
                key: KEY
            }
        }).get('/subscriptions', {
            params: {
                q: term,
            }
        });

        setSubs(response.data.items);
    };

    return [subs, search];
};

export default useSubs;