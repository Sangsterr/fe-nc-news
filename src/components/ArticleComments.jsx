import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as api from "../api";
import dayjs from "dayjs";

function ArticleComments(props) {
  const [newComment, setNewComment] = useState(null);
  const [buttonText, setButtonText] = useState("Submit Comment");
  function handleSubmit(e) {
    e.preventDefault();
    const newCommentObj = {
      author: "grumpy19",
      body: newComment,
      created_at: new Date().toISOString(),
      votes: 0,
      comment_id: 123456789,
    };

    props.setComments((previousComments) => [
      newCommentObj,
      ...previousComments,
    ]);
    props.setArticle((previousArticle) => ({
      ...previousArticle,
      comment_count: previousArticle.comment_count + 1,
    }));

    api.postNewComment(newComment, props.article).catch((err) => {
      props.setComments((previousComments) => {
        previousComments.shift();
        return [...previousComments];
      });
      props.setArticle((previousArticle) => ({
        ...previousArticle,
        comment_count: previousArticle.comment_count - 1,
      }));
    });
  }

  return (
    <div>
      <form>
        <label htmlFor="submit-comment"> Post your own comment: </label>
        <input
          id="users-comment"
          type="text"
          defaultValue=""
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
        />

        <button
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
            setButtonText("Comment Posted!");
            e.target.disabled = true;
          }}
        >
          {buttonText}
        </button>
      </form>

      <ul id="comments-list">
        <h3>Comments: </h3>
        {props.comments.map((comment) => {
          return (
            <li className="each-comment" key={comment.comment_id}>
              <p>Author: {comment.author}</p>
              <p>Comment: {comment.body}</p>
              <p>
                Created At:{" "}
                {dayjs(comment.created_at).format("HH:mm - DD-MM-YYYY")}
              </p>
              <p>Votes: {comment.votes}</p>
              <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ArticleComments;
