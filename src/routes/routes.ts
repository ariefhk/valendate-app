import Redirect404 from "@/components/molecules/redirect/redirect-404"

export interface RouteInterface {
  name: string
  path: string
  component: React.FC
}

export interface RouteRootInterface extends RouteInterface {
  routes?: RouteRootInterface[]
}

const routeModules = import.meta.glob("./**/*.route.ts", { eager: true })

const generatedRouteList = Object.values(routeModules).flatMap(
  (module) => (module as { default: RouteRootInterface }).default,
)

const routes: RouteRootInterface[] = [
  ...generatedRouteList,
  {
    name: "error-not-found-global",
    path: "*",
    component: Redirect404,
  },
]

export default routes
