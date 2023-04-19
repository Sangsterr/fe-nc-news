import { Link } from "react-router-dom";

function TopicCard({ topic }) {
  return (
    <li className="each-topic">
      <p>Topic: {topic.slug}</p>
      <p> {topic.description}</p>
      <br />
      <Link to={`/topics/${topic.slug}`}>
        <button> Related Articles </button>
      </Link>
    </li>
  );
}

export default TopicCard;
