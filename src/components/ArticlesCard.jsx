function ArticlesCard({ article }) {
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
    </li>
  );
}

export default ArticlesCard;
