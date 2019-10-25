import axios from 'axios';

const KEY = 'AIzaSyDtD8gWAYjuxpTEnO63FuMucoos9aooQvk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 6,
        key: KEY
    }
});

