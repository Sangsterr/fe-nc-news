import { Link } from "react-router-dom";

function TopicCard({ topic }) {
  return (
    <main>
      <section className="articles-list">
        <li className="each-topic">
          <Link to={`/topics/${topic.slug}`}>
            <p>Topic: {topic.slug}</p>
          </Link>
          <p> {topic.description}</p>
          <br />
        </li>
      </section>
    </main>
  );
}

export default TopicCard;
