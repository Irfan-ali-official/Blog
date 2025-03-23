import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Posts from "./routes/Posts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import NewPost from "./routes/NewPost";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        children: [{ path: "create-post", element: <NewPost /> }],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
