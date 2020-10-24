import { home } from "../configs/routes";

import Home from "../pages/HomePage";

const HomeRoute = [
  {
    path: home,
    exact: true,
    isProtected: false,
    component: Home,
  },
];

export default HomeRoute;
