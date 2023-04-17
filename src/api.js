import axios from 'axios';

const newsAPI = axios.create({
    baseURL: 'https://james-news.onrender.com/api/'
});

export const fetchArticles = async () => {
    const response = await newsAPI.get('/articles');
    return response.data.articles;
}

export const fetchSpecificArticle = async (article_id) => {
    const response = await newsAPI.get(`/articles/${article_id}`)
    return response.data.msg[0];
}