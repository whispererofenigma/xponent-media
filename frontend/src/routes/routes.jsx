import Home from "../pages/Home";
import About from "../pages/About";
import Admin from "../pages/Admin";
import CreateBlogPage from "../pages/CreateBlog";
import CreateAdmin from "../pages/CreateAdmin";
import AdminLogin from "../pages/AdminLogin";

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
    path: "/admin-blog",
    element: <CreateBlogPage />,
  },
  
  {
    path: "/admin-new",
    element: <CreateAdmin />,
  },
  
  {
    path: "/admin-login",
    element: <AdminLogin />,
  },
     
];

export default routes;