import axios from 'axios';

const newsAPI = axios.create({
    baseURL: 'https://james-api.onrender.com/api/'
});

export const fetchArticles = async (topic, sortBy, orderBy) => {
    const response = await newsAPI.get('/articles', { params: { topic: topic, sort_by: sortBy, order: orderBy } })

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

export const postNewComment = async (comment, user, article) => {
    const newComment = {
        body: comment,
        username: user
    }

    const response = await newsAPI.post(`/articles/${article.article_id}/comments`, newComment);
    return response.data.comment;
}

export const fetchTopics = async () => {
    const response = await newsAPI.get(`/topics`)
    return response.data
}

export const fetchUsers = async () => {
    const response = await newsAPI.get(`/users`)
    return response.data.users
}

export const removeComment = async (comment) => {

    const response = await newsAPI.delete(`comments/${comment}`)
}