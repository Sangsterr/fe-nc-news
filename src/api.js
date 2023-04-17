import axios from 'axios';

const newsAPI = axios.create({
    baseURL: 'https://james-news.onrender.com/api/'
});

export const fetchArticles = async () => {
    const response = await newsAPI.get('/articles');
    return response.data.articles;
}