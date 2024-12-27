import Home from "../pages/Home";
import About from "../pages/About";
import Admin from "../pages/admin";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
     
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/admin",
    element: <Admin />,
  },
     
];

export default routes;