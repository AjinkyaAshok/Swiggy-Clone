import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import ErrorPage from "./src/components/ErrorPage";
import RestaurantInfo from "./src/components/RestaurantInfo";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import CartPage from "./src/components/CartPage";
import SubFooter from "./src/components/SubFooter";
import Offers from "./src/components/Offers";
const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const data = {
      name: "Ajinkya",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Outlet />
        </UserContext.Provider>
        <SubFooter />
      </div>
    </Provider>
  );
};
const Grocery = lazy(() => import("./src/components/Grocery"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resID",
        element: <RestaurantInfo />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
