import { useEffect, useState } from "react";
import * as api from "../api";
import ArticlesCard from "./ArticlesCard";

function Articles({ topic }) {
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.fetchArticles(topic).then((articles) => {
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
          return <ArticlesCard article={article} key={article.article_id} />;
        })}
      </ul>
    </main>
  );
}

export default Articles;
