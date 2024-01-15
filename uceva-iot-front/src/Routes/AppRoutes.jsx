import { useRoutes } from "react-router-dom";
import Home from "../Pages/Home"
import About from "../Pages/About"
import Blog from "../Pages/Blog"
import CheckIn from "../Pages/CheckIn"
import SignIn from "../Pages/SignIn"
import NotFound from "../Pages/NotFound"

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/blog", element: <Blog /> },
    { path: "/check-in", element: <CheckIn /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> }
  ]);
  return routes;
}

export default AppRoutes;