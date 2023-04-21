import { useParams } from "react-router-dom";
import Articles from "./Articles";

function SingleTopicCard() {
  const { topic_slug } = useParams();

  return (
    <div className="articles-list">
      <Articles topic={topic_slug} />
    </div>
  );
}

export default SingleTopicCard;
