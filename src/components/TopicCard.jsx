import { Link } from "react-router-dom";

function TopicCard({ topic }) {
  return (
    <main>
      <section className="articles-list">
        <li className="each-topic">
          <p>Topic: {topic.slug}</p>
          <p> {topic.description}</p>
          <br />
          <Link to={`/topics/${topic.slug}`}>
            <button> Related Articles </button>
          </Link>
        </li>
      </section>
    </main>
  );
}

export default TopicCard;
