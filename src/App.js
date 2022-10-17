import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home';
import Login from './components/Login';
import RegisterFrom from './components/RegisterFrom';
import PrivateRoute from './privateRoute/PrivateRoute';
import Orders from './components/Orders';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/orders',
          element: <PrivateRoute><Orders></Orders></PrivateRoute>
        },
        {
          path: '/register',
          element: <RegisterFrom></RegisterFrom>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
