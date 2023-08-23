import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import {
  Outlet,
  RouterProvider,
  Link,
  Router,
  Route,
  RootRoute,
} from "@tanstack/react-router"
import { CarouselPage } from "./pages/CarouselPage"
import "./index.css"

// Create a root route
const rootRoute = new RootRoute({
  component: Root,
})

function Root() {
  return (
    <>
      <div>
        <Link to="/">Home</Link> <Link to="/carousel">Carousel</Link>
      </div>
      <hr />
      <Outlet />
    </>
  )
}

// Create an index route
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
})

function Index() {
  return (
    <div>
      <h3>Welcome Home!</h3>
    </div>
  )
}

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/carousel",
  component: About,
})

function About() {
  return <CarouselPage />
}

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])

// Create the router using your route tree
const router = new Router({ routeTree })

// Register your router for maximum type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

// Render our app!
const rootElement = document.getElementById("app")!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}
