import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from 'react-router-dom';
import MainLayout from './layout/mainlayout';
import Home from './layout/dashboard';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {index: true, element: <Home /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;