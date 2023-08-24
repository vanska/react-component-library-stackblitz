import {
  Link,
  Outlet,
  RootRoute,
  Route,
  Router,
  RouterProvider,
} from "@tanstack/react-router"
import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { CarouselPage } from "./pages/CarouselPage"
import { ImageTextAndHighlightGridPage } from "./pages/ImageTextAndHighlightGrid"

const rootRoute = new RootRoute({
  component: Root,
})

function Root() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/carousel">Carousel</Link>
        </li>
        <li>
          <Link to="/image-text-and-highlight-grid">
            ImageTextAndHighlightGrid
          </Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  )
}

const routeTree = rootRoute.addChildren([
  new Route({
    getParentRoute: () => rootRoute,
    path: "/",
    component: () => <h1>Hello</h1>,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: "/carousel",
    component: () => <CarouselPage />,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: "/image-text-and-highlight-grid",
    component: () => <ImageTextAndHighlightGridPage />,
  }),
])

// Create the router using route tree
const router = new Router({ routeTree })

// Register router for maximum type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

// Render app to DOM
const rootElement = document.getElementById("app")!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}
