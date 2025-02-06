import React, { FC } from "react"
import { Route, Routes } from "react-router"
import routes from "./routes"

interface RouteInterface {
  name: string
  path: string
  component: React.FC
}

export interface RouteRootInterface extends RouteInterface {
  routes?: RouteRootInterface[]
}

const renderRoute = (route: RouteRootInterface, index: number) => {
  const renderRoutes = (routes: RouteRootInterface[]) => {
    if (routes) {
      return routes.map((routeChild: RouteRootInterface, index) =>
        renderRoute(routeChild, index),
      )
    }
    return null
  }
  const Component = route.component as unknown as () => JSX.Element
  return (
    <Route
      path={route.path}
      key={`${index + 1}-${route.name}`}
      element={<Component />}>
      {route.routes && renderRoutes(route.routes)}
    </Route>
  )
}

const Pages: FC = () => {
  return <Routes>{routes.map(renderRoute)}</Routes>
}

export default Pages
