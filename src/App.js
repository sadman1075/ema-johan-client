import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Origin from './Pages/Origin';
import About from './components/About/About';
import Shop from './components/Shop/Shop'
import Orders from './components/Orders/Orders'
import Inventory from './components/Inventory/Inventory';
import Singup from './components/Singup/Singup';
import Login from './components/Login/Login';
import Shiping from './components/Shipping/Shiping';
import PrivateRoutes from './components/Routes/PrivateRoutes';




function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Origin></Origin>,
      children:[
        {
          path:'/',
          loader:()=>fetch('http://localhost:5000/products'),
          element:<Shop></Shop>
        },
        {
          path:'orders',
          loader:()=>fetch('products.json'),
          element:<Orders></Orders>
        },
        {
          path:"inventory",
          element:<PrivateRoutes><Inventory></Inventory></PrivateRoutes>
        },
        {
          path:'/shipping',
          element:<PrivateRoutes><Shiping></Shiping></PrivateRoutes>
        },
        {
          path:"about",
          element:<About></About>
        },
        {
          path:'singup',
          element:<Singup></Singup>
        },
        {
          path:'login',
          element:<Login></Login>
        }
      ]
      
    },
    
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
