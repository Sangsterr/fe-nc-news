import { useEffect, useState } from "react";
import { Link, Route, useParams } from "react-router-dom";
import * as api from "../api";
import dayjs from "dayjs";

function SingleArticleCard() {
  const { article_id } = useParams();
  const [article, setArticle] = useState();
  const [comments, setComments] = useState();
  const [showComments, setShowComments] = useState(false);
  const [currentVotes, setCurrentVotes] = useState();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.fetchSpecificArticle(article_id).then((singleArticle) => {
      setArticle(singleArticle);
      setIsLoading(false);
    });
    api.fetchArticleComments(article_id).then((comments) => {
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
      setArticle((prevArticle) => ({
        ...prevArticle,
        votes: prevArticle.votes - num,
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
      <button
        className="article-comment-button"
        onClick={() => {
          setShowComments(!showComments);
        }}
      >
        Comments: {article.comment_count}
      </button>
      {showComments && (
        <div>
          <ul id="comments-list">
            <h3>Comments: </h3>
            {comments.map((comment) => {
              return (
                <li className="each-comment" key={comment.comment_id}>
                  <p>Author: {comment.author}</p>
                  <p>Comment: {comment.body}</p>
                  <p>
                    Created At:{" "}
                    {dayjs(comment.created_at).format("HH:mm:ss - DD-MM-YYYY")}
                  </p>
                  <p>Votes: {comment.votes}</p>
                  <br />
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <br />
    </main>
  );
}

export default SingleArticleCard;
