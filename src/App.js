import "./header.css";
import "./components/Blocks/Header/Header";
import { RouterProvider } from 'react-router-dom';
import createRouter from "Router";

function App() {
  const router = createRouter()
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}
export default App;
