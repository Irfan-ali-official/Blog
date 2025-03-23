import Post from "./post";
import classes from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";

function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              author={post.author}
              id={post.id}
              key={post.id}
              body={post.body}
            />
          ))}
          {/* <Post author="Zayyan" body="Check out the full course!" />
        <Post author="Zayyan" body="Check out the full course!" /> */}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet,</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}
export default PostsList;
