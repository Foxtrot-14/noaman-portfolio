import { Outlet, useRoutes } from "react-router-dom";
import { Riple } from "react-loading-indicators";
import { HomeLayout } from "../layouts/Home/Landing-Layout";
import { lazy, Suspense } from "react";

export const Homepage = lazy(() => import("../pages/Homepage"));
export const Devpage = lazy(() => import("../pages/Devpage"));
export const DSApage = lazy(() => import("../pages/DSApage"));
export const MyStackpage = lazy(() => import("../pages/MyStack"));

export function Router() {
  const loading = <Riple color="#0F0" size="large" text="" textColor="" />;
  return useRoutes([
    {
      element: (
        <HomeLayout>
          <Suspense fallback={loading}>
            <Outlet />
          </Suspense>
        </HomeLayout>
      ),
      children: [
        { element: <Homepage />, index: true },
        { element: <Devpage />, path: "dev" },
        { element: <DSApage />, path: "dsa" },
        { element: <MyStackpage />, path: "stack" },
      ],
    },
  ]);
}
