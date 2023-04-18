import { Link } from "react-router-dom";

function CommentsCard({ comment }) {
  return (
    <li className="each-comment">
      <p>Author: {comment.author}</p>
      <p>Comment: {comment.body}</p>
      <p>Created At: {comment.created_at}</p>
      <p>Votes: {comment.votes}</p>
      <br />
    </li>
  );
}

export default CommentsCard;
