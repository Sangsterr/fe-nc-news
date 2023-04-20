import { Link } from "react-router-dom";

function TopicCard({ topic }) {
  return (
    <main>
      <h3>Topics</h3>
      <li className="each-topic">
        <p>Topic: {topic.slug}</p>
        <p> {topic.description}</p>
        <br />
        <Link to={`/topics/${topic.slug}`}>
          <button> Related Articles </button>
        </Link>
      </li>
    </main>
  );
}

export default TopicCard;
