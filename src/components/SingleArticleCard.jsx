import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";

function SingleArticleCard() {
  const { article_id } = useParams();
  const [article, setArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.fetchSpecificArticle(article_id).then((singleArticle) => {
      setArticle(singleArticle);
      setIsLoading(false);
    });
  }, [article_id]);

  console.log(article);
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
      <p>Comment Count: {article.comment_count}</p>
      <p>Votes: {article.votes}</p>
      <p>Posted At: {article.created_at}</p>
      <br />
    </main>
  );
}

export default SingleArticleCard;
