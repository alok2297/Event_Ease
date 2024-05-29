import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import {PageLoader} from '../Pages/PageLoader';
import {getRoutes} from "../Theme/Theme"
import PageNotFound from 'components/Blocks/PageNotFound/PageNotFound';

// Function to create the router
const createRouter = () => {
  const routes = Object.values(getRoutes() || {}).map(route => ({
    ...route,
    element: <PageLoader/>,
    errorElement: <PageNotFound/>,
  }));

  const router = createBrowserRouter([
    ...routes,
  ])
  return router
};

export default createRouter;
