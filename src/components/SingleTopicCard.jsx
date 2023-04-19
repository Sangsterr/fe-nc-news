import { useParams } from "react-router-dom";
import Articles from "./Articles";

function SingleTopicCard() {
  const { topic_slug } = useParams();

  return <Articles topic={topic_slug} />;
}

export default SingleTopicCard;
