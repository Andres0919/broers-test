import { createBrowserRouter } from "react-router-dom"
import HomePage from "./pages/Home"
import LoginPage from "./pages/Login"
import DetailPage from "./pages/Detail"
import NotFoundPage from "./pages/404"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/pokemon",
    element: <HomePage />,
  },
  {
    path: "/pokemon/:name",
    element: <DetailPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
])
