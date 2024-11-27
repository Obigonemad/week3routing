import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
  Link
} from "react-router-dom";

const Root = () => {
  return (<>
    <Header />
    <Outlet />
  </>);
}
const Dashboard = () => <h1>Dashboard</h1>;
const About = () => <h1>About</h1>;

const Header = () => {
  return (<>
     
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/about">About  </Link>

  </>);
}

// You can do this:
const router = createBrowserRouter(
  createRoutesFromElements(<>
    <Route path="/" element={<Root />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="about" element={<About />} />
    </Route>
    <Route path="/alone" element={<h1>Alone</h1>} />
  </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>

    );