import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Posts, { loader as postsLoader } from "./routes/Posts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import NewPost, { action as postsAction } from "./routes/NewPost";
import PostDetails, {
  loader as postsDetailsLoader,
} from "./routes/PostDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader, //this loader gets executed before the <Posts/> component gets rendered!
        children: [
          { path: "/create-post", element: <NewPost />, action: postsAction },
          {
            path: "/:id",
            element: <PostDetails />,
            loader: postsDetailsLoader,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
