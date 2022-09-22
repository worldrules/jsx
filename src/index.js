import React from "react";
import ReactDOM from "react-dom/client";
import CommentDetail from "./CommentDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        content="Nice Blog Post"
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00PM"
        content="I like this subject"
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 5:00PM"
        content="I like the writing"
      />
    </div>
  );
};
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
