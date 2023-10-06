import "./App.css";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";

const Route = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/dashboard",
    element:<Dashboard/>
  }
])

function App() {
  return (
      <RouterProvider router={Route} />
  );
}

export default App;
