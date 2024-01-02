import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import ErrorPage from "./components/ErrorPage"
import Blogs from "./components/Blogs"
import Blog from "./components/Blog"

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/blogs",
      element: <Blogs />,
    },
    {
      path: "blogs/:blogid",
      element: <Blog />,
    },
  ])

  return <RouterProvider router={router} />
}

export default Router
