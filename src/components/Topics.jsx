import { useEffect, useState } from "react";
import * as api from "../api";
import TopicCard from "./TopicCard";
import ErrorComponent from "./ErrorComponent";

function Topics() {
  const [topics, setTopics] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.fetchTopics().then((topics) => {
      setTopics(topics);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Page Loading...</p>;
  }

  return (
    <main>
      <h3>Topics</h3>
      <ul id="topics-list">
        {topics.map((topic) => {
          return (
            <TopicCard
              topic={topic}
              slug={topic.slug}
              description={topic.description}
              key={topic.slug}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default Topics;
