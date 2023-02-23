import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { AppRouter, LazyRoutes } from '@/routes';

export const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppRouter />,
      children: LazyRoutes
    },
    {
      path: '*',
      element: <Navigate replace to="lazy1" />
    }
  ]);

  return <RouterProvider router={router} />;
};
