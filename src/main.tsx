import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./general/components/Routes/PrivateRoute.tsx";
import "./index.css";
import { store } from "./redux/stote.ts";
import { SignUpScreen } from "./features/Auth/screens/SignUp/index.tsx";
import { APP_MAIN_ROUTES, AUTH_SUB_ROUTES } from "./general/constants/appRoutes.ts";
import LogInScreen from "./features/Auth/screens/LoginScreen/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <div>Dashboard</div>
      </PrivateRoute>
    ),
  },
  {
    path: `/${APP_MAIN_ROUTES.AUTH}`,
    children: [
      {
        path: AUTH_SUB_ROUTES.LOGIN,
        element: <LogInScreen />,
      },
      {
        path: AUTH_SUB_ROUTES.SIGN_UP,
        element: <SignUpScreen />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App />
     */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
