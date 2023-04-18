// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import * as api from "../api";
// import CommentsCard from "./CommentsCard";

// function ArticleComments() {
//   const { article_id } = useParams();
//   const [comments, setComments] = useState();
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setIsLoading(true);
//     api.fetchArticleComments(article_id).then((comments) => {
//       setComments(comments);
//       setIsLoading(false);
//       console.log(comments);
//     });
//   }, [article_id]);

//   if (isLoading) {
//     return <p>Page Loading...</p>;
//   }

//   return (
//     <main>
//       <ul id="comments-list">
//         {comments.map((comment) => {
//           return <CommentsCard comment={comment} key={comment.comment_id} />;
//         })}
//       </ul>
//     </main>
//   );
// }

// export default ArticleComments;
