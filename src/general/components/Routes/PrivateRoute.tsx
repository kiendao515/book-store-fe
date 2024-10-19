import { Navigate } from "react-router-dom";
import { AUTH_ROUTES } from "../../constants/appRoutes";

const PrivateRoute = (props: any) => {
  const isAuth = false;
  // const accessToken = localStorage.getItem("access_token");

  if (!isAuth) {
    return <Navigate to={AUTH_ROUTES.LOGIN} replace />;
  }

  return props.children;
};

export default PrivateRoute;
