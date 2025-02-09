import HomePage from "@/components/pages/home-page"
import LoveLayout from "@/components/templates/love-layout"
import { RouteRootInterface } from "../routes"

const homeRoutes: RouteRootInterface[] = [
  {
    name: "home-route",
    path: "/",
    component: LoveLayout,
    routes: [
      {
        name: "home",
        path: "/",
        component: HomePage,
      },
    ],
  },
]

export default homeRoutes
