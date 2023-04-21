import { Link } from "react-router-dom";
import dayjs from "dayjs";

function ArticlesCard({ article }) {
  return (
    <li className="each-article">
      <Link to={`/articles/${article.article_id}`} className="link-text">
        <img
          className="article-image"
          src={article.article_img_url}
          alt={article.title}
        />
        <p className="single-article-title">{article.title}</p>
        <p className="single-article-author">By: {article.author}</p>
        <p className="single-article-topic">Topic: {article.topic}</p>
        <br />
        <p className="single-article-date">
          Posted At: {dayjs(article.created_at).format("h:mm A - MMM DD, YYYY")}
        </p>
      </Link>
    </li>
  );
}

export default ArticlesCard;
