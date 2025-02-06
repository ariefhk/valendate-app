import HelloPage from "@/components/pages/hello-page"
import GuestLayout from "@/components/templates/guest-layout"
import { RouteRootInterface } from "../routes"

const helloRoutes: RouteRootInterface[] = [
  {
    name: "hello-route",
    path: "/",
    component: GuestLayout,
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
