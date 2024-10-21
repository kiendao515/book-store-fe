import { Route, Routes } from "react-router-dom";
import { LoginScreen } from "./Auth/screens/LoginScreen";

export const AppContainer = () => {
  return (
    <Routes>
      <Route path={"/"} element={<LoginScreen />} />
      {/* <Route path={"/"} element={<Navigate to={""} />} /> */}
    </Routes>
  );
};
