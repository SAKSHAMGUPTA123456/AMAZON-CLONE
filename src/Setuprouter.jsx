import { createHashRouter, RouterProvider } from 'react-router-dom';
import { First } from './Firstpage';
import { Main } from './Mainpage';
import { children } from 'react';
import { Sell } from './Sell';
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
path:"sell",
element:<Sell/>
   }
   ]}
  ])

  return <RouterProvider router={router} />;
};
