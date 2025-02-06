import TestPage from "@/components/pages/test-page"
import GuestLayout from "@/components/templates/guest-layout"
import { RouteRootInterface } from "../routes"

const testRoutes: RouteRootInterface[] = [
  {
    name: "test-route",
    path: "/test",
    component: GuestLayout,
    routes: [
      {
        name: "test",
        path: "/test",
        component: TestPage,
      },
      {
        name: "test",
        path: "/test/:id",
        component: TestPage,
      },
    ],
  },
]

export default testRoutes
