import Post from "./post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";
function PostsList({ isPosting, onStopPosting }) {
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  const authorChangeHangler = (e) => {
    setAuthor(e.target.value);
  };
  const bodychangeHandler = (e) => {
    setBody(e.target.value);
  };
  return (
    <>
      {isPosting ? (
        <Modal onClose={onStopPosting}>
          <NewPost
            onbodyChange={bodychangeHandler}
            onAuthorChange={authorChangeHangler}
          />
        </Modal>
      ) : null}

      <ul className={classes.posts}>
        <Post author={body} body={author} />
        <Post author="Zayyan" body="Check out the full course!" />
        <Post author="Zayyan" body="Check out the full course!" />
      </ul>
    </>
  );
}
export default PostsList;
