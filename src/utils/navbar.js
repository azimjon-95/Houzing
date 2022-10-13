import React from 'react';
import useId from '../hooks/useId';
import Login from '../components/Login/App';
import Register from '../components/Register/App';
import Loading from '../components/Loading/App';
// import HouseItemPage from '../pages/HoumeItem';

const HomePage = React.lazy(() => import('../pages/Home'));
const Properties = React.lazy(() => import('../pages/Properties'));
const HoumeItem = React.lazy(() => import('../pages/HoumeItem'));

// import HomePage from '../pages/Home';
// import Properties from '../pages/Properties';

export const navbar = [
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment><Loading/></React.Fragment>}>
        <HomePage />{' '}
      </React.Suspense>
    ),
    title: 'Home',
    path: '/home',
    private: false,
    hidden: false,
  },

  
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment><Loading/></React.Fragment>}>
        <Properties />
      </React.Suspense>
    ),
    title: 'Properties',
    path: '/properties',
    private: false,
    hidden: false,
  },

  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment><Loading/></React.Fragment>}>
        <HoumeItem/>
      </React.Suspense>
    ),
    title: 'Singel House',
    path: '/properties/:id',
    private: false,
    hidden: true,
  },

  // Login page
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment><Loading/></React.Fragment>}>
        <Login/>
        <Register/>
      </React.Suspense>
    ),
    title: 'Sign In',
    path: '/signin',
    private: false,
    hidden: true,
  },

  // Register page
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        
      </React.Suspense>
    ),
    title: 'Sign Up',
    path: '/signup',
    private: false,
    hidden: true,
  },
];
