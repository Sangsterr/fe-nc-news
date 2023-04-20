import { useParams } from "react-router-dom";

function NotFound() {
  const { test } = useParams();
  return (
    <main>
      <h2>404 Not Found</h2>
      <h2>The page you are looking for does not exist.</h2>
    </main>
  );
}

export default NotFound;
