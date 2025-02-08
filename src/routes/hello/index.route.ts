import HelloPage from "@/components/pages/hello-page"
import LoveLayout from "@/components/templates/love-layout"
import { RouteRootInterface } from "../routes"

const helloRoutes: RouteRootInterface[] = [
  {
    name: "hello-route",
    path: "/",
    component: LoveLayout,
    routes: [
      {
        name: "hello",
        path: "/",
        component: HelloPage,
      },
    ],
  },
]

export default helloRoutes
