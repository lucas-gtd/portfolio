import { createBrowserRouter } from "react-router";
import Home from "./components/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home
  },
]);

export default router;