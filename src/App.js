import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/Layout/Main';
import Login from './components/Login/Login';
import Register from './components/SignUp/SignUp';



function App() {
  const router = createBrowserRouter([
    {path:'/',element:<Main> </Main>,children:[
      {path:'/', element: <Register > </Register> },
      {path:'/SignUp', element: <Register > </Register> },
      {path: '/Login' ,element:<Login> </Login>}
    ]}
  ]);
return (
     <div> 
    
      <RouterProvider router={router} > </RouterProvider>
    </div>
  );
}

export default App;
