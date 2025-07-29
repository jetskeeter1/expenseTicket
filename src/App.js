import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from 'react-router-dom';
import MainLayout from './layout/mainlayout';
import Home from './layout/dashboard';
import LandPage from './layout/landingpage';
import Login from './layout/auth/login';
import Register from './layout/auth/register';
import ProtectRouting from './layout/auth/protectRoute';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {index: true, element: <LandPage /> },
      {path: "/login", element: <Login /> },
      {path: "/register", element: <Register /> },
      {
        path: "/dashboard",
        element: (
          <ProtectRouting >
            <MainLayout />
          </ProtectRouting>
        ), 
        children:[
          {index: true, element: <Home />}
        ]
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;