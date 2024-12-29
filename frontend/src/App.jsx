

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes/routes';
import ProtectedRoutes from './utilities/ProtectedRoutes';
import CreateBlog from './pages/CreateBlog';
import CreateAdmin from './pages/CreateAdmin';


function App() {


  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        <Route element={<ProtectedRoutes />}>
          <Route element={<CreateBlog />} path="/admin-blog" />
          <Route element={<CreateAdmin />} path="/admin-new" />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
