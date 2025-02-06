import Error400Page from "@/components/pages/error/error-400-page"
import Error401Page from "@/components/pages/error/error-401-page"
import Error404Page from "@/components/pages/error/error-404-page"
import Error500Page from "@/components/pages/error/error-500-page"
import { RouteRootInterface } from "../routes"

const errorRoutes: RouteRootInterface[] = [
  {
    name: "error-not-bad-request",
    path: "/error/400",
    component: Error400Page,
  },
  {
    name: "error-not-authorize",
    path: "/error/401",
    component: Error401Page,
  },
  {
    name: "error-not-found",
    path: "/error/404",
    component: Error404Page,
  },
  {
    name: "error-server",
    path: "/error/500",
    component: Error500Page,
  },
]

export default errorRoutes
