import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./Components/Rootlayout";
import Home from './Pages/Home';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route>
        <Route index element={<Home />} />
        {/* <Route element={<Contact />} /> */}
      </Route>
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
