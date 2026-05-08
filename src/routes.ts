import { createBrowserRouter } from "react-router";
import Welcome from "./components/welcome/welcome";
import Home from "./components/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Welcome
  },
  {
    path: "home",
    Component: Home
  }
]);

export default router;