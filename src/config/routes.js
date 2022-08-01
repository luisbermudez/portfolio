import * as PATHS from "../utils/paths";
import { Home, Contact, Projects } from "../pages";

const routes = () => {
  return [
    {
      path: PATHS.HOME,
      element: <Home />,
    },
    {
      path: PATHS.CONTACT,
      element: <Contact />,
    },
    {
      path: PATHS.PROJECTS,
      element: <Projects />,
    },
  ];
};

export default routes;
