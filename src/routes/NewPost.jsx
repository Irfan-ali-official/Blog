import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost(props) {
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  const authorChangeHandler = (e) => {
    setAuthor(e.target.value);
  };
  const bodychangeHandler = (e) => {
    setBody(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const postData = {
      body: body,
      author: author,
    };

    props.onAddPost(postData);
    props.onCancel();
  };
  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={bodychangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={authorChangeHandler}
          />
        </p>
        <p className={classes.actions}>
          <Link to="/" type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
