import { Link } from "react-router-dom";
import Articles from "./Articles";

function Home({ user }) {
  return (
    <main>
      <Articles />
    </main>
  );
}

export default Home;
