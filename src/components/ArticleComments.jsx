import { useState } from "react";
import * as api from "../api";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

function ArticleComments({ user, setComments, comments, setArticle, article }) {
  const [newComment, setNewComment] = useState("");
  const [buttonText, setButtonText] = useState("Submit Comment");
  const [newCommentId, setNewCommentId] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  function deleteComment(newComment_Id) {
    console.log(newComment_Id);
    if (typeof newComment_Id === "object") {
      newComment_Id = newComment_Id.comment_id;
    }
    console.log(newComment_Id);
    setComments((previousComments) => {
      const commentsCopy = [...previousComments];

      const updatedComments = commentsCopy.filter(
        (comment) =>
          comment.comment_id !== newComment_Id && comment.comment_id !== null
      );
      return updatedComments;
    });
    api.removeComment(newComment_Id).catch((err) => {});

    setNewCommentId(null);
    setArticle((previousArticle) => ({
      ...previousArticle,
      comment_count: previousArticle.comment_count - 1,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (newComment.trim() === "") {
      alert("Please enter a comment before submitting.");
      return;
    }
    const newCommentObj = {
      author: user,
      body: newComment,
      created_at: new Date().toISOString(),
      votes: 0,
      comment_id: newCommentId,
    };

    setComments((previousComments) => [newCommentObj, ...previousComments]);
    setArticle((previousArticle) => ({
      ...previousArticle,
      comment_count: previousArticle.comment_count + 1,
    }));
    setButtonDisabled(true);
    api
      .postNewComment(newComment, user, article)
      .then((response) => {
        setNewCommentId(response);
      })
      .catch((err) => {
        setComments((previousComments) => {
          previousComments.shift();
          return [...previousComments];
        });
        setArticle((previousArticle) => ({
          ...previousArticle,
          comment_count: previousArticle.comment_count - 1,
        }));
      });
    setNewComment("");
  }

  return (
    <div>
      {!user ? (
        <Link to="/users">
          <p>Log in to view and post comments</p>
        </Link>
      ) : (
        <form
          onSubmit={(e) => {
            handleSubmit(e);

            e.target.disabled = true;
          }}
        >
          {}
          <label htmlFor="submit-comment"> Post your own comment: </label>
          <input
            id="users-comment"
            type="text"
            value={newComment}
            onChange={(e) => {
              setNewComment(e.target.value);
            }}
          />

          <button type="submit" disabled={buttonDisabled}>
            {buttonText}
          </button>
        </form>
      )}
      <ul id="comments-list">
        <h3>Comments: </h3>
        {comments.map((comment) => {
          return (
            <li className="each-comment" key={comment.created_at}>
              <p>Author: {comment.author}</p>
              <p>Comment: {comment.body}</p>
              <p>
                Created At:{" "}
                {dayjs(comment.created_at).format("h:mm A - MMM DD, YYYY")}
              </p>
              <p>Votes: {comment.votes}</p>
              <br />
              {comment.author === user && (
                <button
                  onClick={() => {
                    console.log(
                      "inside button: ",
                      comment.comment_id,
                      newCommentId
                    );
                    !newCommentId
                      ? deleteComment(comment.comment_id)
                      : deleteComment(newCommentId.comment_id);
                  }}
                >
                  Delete Comment
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ArticleComments;
