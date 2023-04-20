import { useEffect, useState } from "react";
import * as api from "../api";
import ArticlesCard from "./ArticlesCard";
import { useSearchParams } from "react-router-dom";

function Articles({ topic }) {
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);
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
    console.log("in effect");
    api.fetchArticles(topic, sortByQuery, orderQuery).then((articles) => {
      console.log(articles);
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic, sortByQuery, orderQuery]);

  if (isLoading) {
    return <p>Page Loading...</p>;
  }
  return (
    <main>
      <label htmlFor="sort-by">Sort By:</label>
      <select
        id="sort-by"
        defaultValue={""}
        // value={""}
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
        // value={"desc"}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value=""></option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      <ul id="articles-list">
        {articles.map((article) => {
          return <ArticlesCard article={article} key={article.article_id} />;
        })}
      </ul>
    </main>
  );
}

export default Articles;
