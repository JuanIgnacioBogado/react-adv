import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { AppRouter, Routes } from '@/routes';

export const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppRouter />,
      children: Routes
    },
    {
      path: '*',
      element: <Navigate replace to="lazyload" />
    }
  ]);

  return <RouterProvider router={router} />;
};
