import { ShowsView, DetailView, NotFoundView } from "../views";

import { PageLayout } from "../components/layout";
import SCREEN_PATHS from "./paths";

const pos = SCREEN_PATHS.TVSHOWS.lastIndexOf(":search");
export const routes = [
  {
    path: SCREEN_PATHS.APP_ROOT,
    component: PageLayout,
    private: true,
    routes: [
      {
        path: SCREEN_PATHS.TVSHOWS,
        component: ShowsView,
        exact: true,
      },
      {
        path: SCREEN_PATHS.DETAILS,
        component: DetailView,
        exact: true,
      },
      {
        path: "*",
        redirect: SCREEN_PATHS.TVSHOWS.substring(0, pos) + "avengers",
      },
    ],
  },
  {
    path: "/",
    component: PageLayout,
    routes: [
      {
        path: SCREEN_PATHS.NOT_FOUND,
        component: NotFoundView,
      },
      {
        path: "/tv-shows",
        redirect: SCREEN_PATHS.TVSHOWS,
        exact: true,
        component: ShowsView,
      },
      {
        path: "*",
        redirect: SCREEN_PATHS.NOT_FOUND,
      },
    ],
  },
];
