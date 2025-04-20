import { createHashRouter, RouterProvider } from 'react-router-dom';
import { First } from './Firstpage';
import { Main } from './Mainpage';
import { children } from 'react';
import { Sell } from './Sell';
import { Turkeybreast } from './turkeybreatsapi';
import { Turkey } from './Displayturkeybreast';
import { Home } from './Homepage';
import { Error } from './Errors';
import { Displays } from './Turkeyinidvidualitems';
import { Cart } from './Cart';
import { Homes } from './HomeDisplay';
import { HomeItems } from './HomeProductsapi';
export const Setup = () => {
  const router = createHashRouter([
    {
      path: "/",
      element: <First />,
      errorElement:<Error/>
    },
    {
        path:"/main",
element:<Main/>,
   children:[
    {
      path:"",
      element:<Home/>
    },
    {
path:"sell",
element:<Sell/>
   },
   {
    path:"turkeybreast",
    element:<Turkey/>,
    loader:Turkeybreast
   },
   {
    path:"turkeybreast/Display/:id",
    element:<Displays/>,
   },
   {
    path:"Cart",
    element:<Cart/>
   },
   {
    path:"display/:id",
    element:<Homes/>,
    loader:HomeItems
   }
   ]}
  ])

  return <RouterProvider router={router} />;
};
