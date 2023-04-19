import axios from 'axios';

const newsAPI = axios.create({
    baseURL: 'https://james-news.onrender.com/api/'
});

export const fetchArticles = async (topic) => {
    const response = await newsAPI.get('/articles', { params: { topic: topic } });
    return response.data.articles;
}

export const fetchSpecificArticle = async (article_id) => {
    const response = await newsAPI.get(`/articles/${article_id}`)
    return response.data.msg[0];
}

export const fetchArticleComments = async (article_id) => {
    const response = await newsAPI.get(`/articles/${article_id}/comments`)
    return response.data.comments;
}

export const voteOnArticle = async (article, num) => {
    const updatedArticle = {
        inc_votes: num
    };

    const response = await newsAPI.patch(`/articles/${article.article_id}`, updatedArticle);
    return response.data;
}

export const postNewComment = async (comment, article) => {
    const newComment = {
        body: comment,
        username: 'grumpy19'
    }

    const response = await newsAPI.post(`/articles/${article.article_id}/comments`, newComment);
    return response.data.comment;
}

export const fetchTopics = async () => {
    const response = await newsAPI.get(`/topics`)
    return response.data
}