import { useEffect, useState } from "react";
import * as api from "../api";

function Articles() {
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.fetchArticles().then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Page Loading...</p>;
  }

  return (
    <main>
      <ul id="articles-list">
        {articles.map((article) => {
          return (
            <li className="each-article" key={article.article_id}>
              <img
                className="article-image"
                src={article.article_img_url}
                alt={article.title}
              />
              <p className="article-context">Title: {article.title}</p>
              <p className="article-context">Author: {article.author}</p>
              <p className="article-context">Topic: {article.topic}</p>
              <p className="article-context">Article: {article.body}</p>
              <br />
              Comment Count: {article.comment_count}
              <br />
              Votes: {article.votes}
              <br />
              Created At: {article.created_at}
              <br />
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Articles;
