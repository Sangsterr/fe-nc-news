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
        <p className="article-context">{article.title}</p>
        <p className="article-context">By: {article.author}</p>
        <p className="article-context">Topic: {article.topic}</p>
        <br />
        <p className="article-context">
          Posted At: {dayjs(article.created_at).format("h:mm A - MMM DD, YYYY")}
        </p>
      </Link>
    </li>
  );
}

export default ArticlesCard;
