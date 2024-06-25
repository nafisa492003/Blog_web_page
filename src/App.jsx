import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./Components/Rootlayout";
import Home from './Pages/Home';
import About from "./Pages/About";
import AuthorPage from "./Pages/AuthorPage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/author" element={<AuthorPage />} />
      </Route>
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
