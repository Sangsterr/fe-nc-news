import { Link } from "react-router-dom";

function ArticlesCard({ article }) {
  return (
    <li className="each-article">
      <img
        className="article-image"
        src={article.article_img_url}
        alt={article.title}
      />
      <p className="article-context">Title: {article.title}</p>
      <p className="article-context">Author: {article.author}</p>
      <p className="article-context">Topic: {article.topic}</p>
      <br />
      <Link to={`/articles/${article.article_id}`}>
        <button> Article </button>
      </Link>
    </li>
  );
}

export default ArticlesCard;
