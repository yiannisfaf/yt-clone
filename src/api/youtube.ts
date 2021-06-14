import axios from 'axios';

const KEY = 'AIzaSyCROr5frCuNJmWG0xiAnz9gi1b-xYw7QFw';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 12,
        type: 'video',
        key: KEY
    }
});