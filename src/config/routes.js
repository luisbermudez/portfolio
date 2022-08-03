import * as PATHS from "../utils/paths";
import { Home, Contact, Projects, ProjectDetails } from "../pages";

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
    {
      path: PATHS.PROJECTDETAILS,
      element: <ProjectDetails />,
    },
  ];
};

export default routes;
