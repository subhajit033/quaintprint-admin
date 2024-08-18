import Login from './pages/Login/Login';
import Layout from './layout/Layout';
import DashboardHome from './pages/dashboard/main/home/page';
import OrderStatus from './pages/dashboard/main/order-status/page';
import PaymentStatus from './pages/dashboard/main/payment-status/page';
import ArtistSupport from './pages/dashboard/main/artist-support/page';
import Setting from './pages/dashboard/main/setting/page';
import DesignEnquires from './pages/dashboard/main/design-enquires/page';
import ContactSubmission from './pages/dashboard/main/contact-submission/page';
import CareerSubmission from './pages/dashboard/main/career-submission/page';
import { AuthContext } from './utils/auth.context';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [isAuthenticated, setIsauthenticated] = useState(false);
  return (
    <>
      <AuthContext.Provider value={{isAuthenticated, setIsauthenticated}}>
        <RouterProvider router={appRouter} />
      </AuthContext.Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/dashboard',
        element: <DashboardHome />,
      },
      {
        path: '/dashboard/order-status',
        element: <OrderStatus />,
      },
      {
        path: '/dashboard/payment-status',
        element: <PaymentStatus />,
      },
      {
        path: '/dashboard/artist-suport',
        element: <ArtistSupport />,
      },
      {
        path: '/dashboard/setting',
        element: <Setting />,
      },
      {
        path: '/dashboard/design-inquires',
        element: <DesignEnquires />,
      },
      {
        path: '/dashboard/career-submissions',
        element: <CareerSubmission />,
      },
      {
        path: '/dashboard/contact-submissions',
        element: <ContactSubmission />,
      },
    ],
  },
]);

export default App;
