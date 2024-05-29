import "./header.css";
import "./components/Blocks/Header/Header";
import { PageLoader } from "./Pages/PageLoader";
import {getRoutes} from "./Theme/Theme"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const routes = Object.values(getRoutes() || {}).map(route => ({
    ...route,
    element: <PageLoader/>,
  }));

  const router = createBrowserRouter([
    ...routes,
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}
export default App;
