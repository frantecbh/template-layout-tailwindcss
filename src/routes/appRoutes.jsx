import { Route, Routes } from "react-router-dom"
import { Layout } from "../Layout"
import { Home } from "../pages/Home"
import { About } from "../pages/About"
import { Dashboard } from "../pages/Dashboard"
import { NoMatch } from "../pages/NoMatch"


export const AppRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="dashboard" element={<Dashboard />} />

      {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
  )
}
