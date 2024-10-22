import { createBrowserRouter } from "react-router-dom";

import {
  Layout,
  Authentication,
  Home,
  AboutUs,
  Services,
  Reviews,
  Consultation,
  Service
} from "src/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:id",
        element: <Service />,
      },
      {
        path: "/consultation",
        element: <Consultation />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
    ],
  },
  {
    path: "/authentication",
    element: <Authentication />,
  },
]);
