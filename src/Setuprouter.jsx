import { createHashRouter, RouterProvider } from 'react-router-dom';
import { First } from './Firstpage';
import { Main } from './Mainpage';
import { children } from 'react';
import { Sell } from './Sell';
import { Turkeybreast } from './turkeybreatsapi';
import { Turkey } from './Displayturkeybreast';
import { Home } from './Homepage';
export const Setup = () => {
  const router = createHashRouter([
    {
      path: "/",
      element: <First />,
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
   }
   ]}
  ])

  return <RouterProvider router={router} />;
};
