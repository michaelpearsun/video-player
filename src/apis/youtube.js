import axios from 'axios';

const KEY = 'AIzaSyA9hAcqSDsMF6acB4Feanl-Wn2OzBRX6qM'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }

});