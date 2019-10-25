import axios from 'axios';

const KEY = 'AIzaSyDtD8gWAYjuxpTEnO63FuMucoos9aooQvk';
const ENGINE_ID = '014876353812261553427:fet7moxmecd';

export default axios.create({
    baseURL: 'https://www.googleapis.com/customsearch/v1',
    params: {
        key: KEY,
        cx: ENGINE_ID,
        searchType: "image",
        num: 6
    }
});

