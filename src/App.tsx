import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { AppRouter, ComponentPatternsRoutes } from '@/routes';

export const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppRouter />,
      children: ComponentPatternsRoutes
    },
    {
      path: '*',
      element: <Navigate replace to="shopping" />
    }
  ]);

  return <RouterProvider router={router} />;
};
