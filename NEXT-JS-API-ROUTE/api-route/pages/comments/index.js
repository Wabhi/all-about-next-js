import { useState } from "react";

function Comments() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchesComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  const submitComments = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    // fetchesComments();
  };

  return (
    <div
      style={{
        marginTop: "50px",
      }}
    >
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComments}>Submit the comment</button>
      <button onClick={fetchesComments}>Load the comments</button>
      {comments.map((comment) => {
        return (
          <div
            key={comment.id}
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "turquoise",
              border: "2px solid red",
            }}
          >
            <h1>{comment.id}</h1>
            <h1>{comment.text}</h1>
            <button onClick={deleteComment(comment.id)}>
              Delete the comment
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Comments;
