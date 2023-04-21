import { useEffect, useState } from "react";
import * as api from "../api";
import ArticlesCard from "./ArticlesCard";
import { useSearchParams } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";

function Articles({ topic, user }) {
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortByQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");

  const setSortOrder = (direction) => {
    const newParams = new URLSearchParams(searchParams);

    newParams.set("order", direction);
    setSearchParams(newParams);
  };

  const setSortBy = (sortBy) => {
    const newParams = new URLSearchParams(searchParams);

    newParams.set("sort_by", sortBy);
    setSearchParams(newParams);
  };

  useEffect(() => {
    api
      .fetchArticles(topic, sortByQuery, orderQuery)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [topic, sortByQuery, orderQuery]);

  if (isLoading) {
    return <p>Page Loading...</p>;
  }

  if (error) {
    return <ErrorComponent message={error.response.data.msg} />;
  }

  return (
    <main>
      <label htmlFor="sort-by">Sort By:</label>
      <select
        id="sort-by"
        defaultValue={""}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value=""></option>
        <option value="created_at">Date</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>
      <br />
      <label htmlFor="sort-order">Sort Order:</label>
      <select
        id="sort-order"
        defaultValue={""}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value=""></option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      <ul id="articles-list">
        {articles.map((article) => {
          return (
            <ArticlesCard
              article={article}
              user={user}
              key={article.article_id}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default Articles;
