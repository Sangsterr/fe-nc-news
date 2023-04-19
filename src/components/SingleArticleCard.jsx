import { useEffect, useState } from "react";
import { Link, Route, useParams } from "react-router-dom";
import * as api from "../api";
import dayjs from "dayjs";
import ArticleComments from "./ArticleComments";

function SingleArticleCard() {
  const { article_id } = useParams();
  const [article, setArticle] = useState();
  const [comments, setComments] = useState();
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState(null);
  const [buttonText, setButtonText] = useState("Submit Comment");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      api.fetchSpecificArticle(article_id),
      api.fetchArticleComments(article_id),
    ]).then(([singleArticle, comments]) => {
      setArticle(singleArticle);
      setComments(comments);
      setIsLoading(false);
    });
  }, [article_id]);

  function handleChange(num) {
    setArticle((previousArticle) => ({
      ...previousArticle,
      votes: previousArticle.votes + num,
    }));
    api.voteOnArticle(article, num).catch((err) => {
      setArticle((previousArticle) => ({
        ...previousArticle,
        votes: previousArticle.votes - num,
      }));
    });
  }

  if (isLoading) {
    return <p>Page Loading...</p>;
  }

  return (
    <main className="article-context">
      <img
        className="article-image"
        src={article.article_img_url}
        alt={article.title}
      />
      <p>Title: {article.title}</p>
      <p>Author: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <p>Content: {article.body}</p>
      <p>
        Posted At: {dayjs(article.created_at).format("HH:mm:ss - DD-MM-YYYY")}
      </p>
      <p>Votes: {article.votes}</p>
      <button
        className="increase-vote-button"
        onClick={(e) => {
          handleChange(1);
          e.target.disabled = true;
        }}
      >
        Vote Up
      </button>
      <button
        className="decrease-vote-button"
        onClick={(e) => {
          handleChange(-1);
          e.target.disabled = true;
        }}
      >
        Vote Down
      </button>
      <br />

      <br />
      <button
        className="article-comment-button"
        onClick={() => {
          setShowComments(!showComments);
        }}
      >
        Comments: {article.comment_count}
      </button>
      {showComments && (
        <ArticleComments
          setComments={setComments}
          comments={comments}
          setArticle={setArticle}
          article={article}
        />
      )}
      <br />
    </main>
  );
}

export default SingleArticleCard;
