import { Routes, Route } from "react-router-dom";
import routes from "./config/routes";

function RootNavigation() {
  return (
    <Routes>
      {routes({}).map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default RootNavigation;
