import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Redirect from "./infra/Redirect";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:urlId",
    element: <Redirect />,
  },
]);
