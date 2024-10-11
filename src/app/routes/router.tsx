import { createBrowserRouter } from "react-router-dom";

import {
  Layout,
  Authentication,
  Home,
  AboutUs,
  Services,
  Reviews,
  Consultation,
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
