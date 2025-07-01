import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import Flights from "./pages/Flights";
import Holidays from "./pages/Holidays";
import Hotels from "./pages/Hotels";
import Visas from "./pages/Visas";
import Business from "./pages/Business";
import Offers from "./pages/Offers";
import Blogs from "./pages/Blogs";
import Cruises from "./pages/Cruises";
import MyTrips from "./pages/MyTrips";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/flights",
        element: <Flights />,
      },
      {
        path: "hotels",
        element: <Hotels />,
      },
      {
        path: "holidays",
        element: <Holidays />,
      },
      {
        path: "visas",
        element: <Visas />,
      },
      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "mytrips",
        element: <MyTrips />,
      },
      {
        path: "cruises",
        element: <Cruises />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "business",
        element: <Business />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
