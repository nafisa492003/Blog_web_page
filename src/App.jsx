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
import AutherDetails from './Pages/AutherDetails';
import BlogPage from "./Pages/BlogPage";
import PostPage from "./Pages/PostPage";
import PostView from "./Pages/PostView";
import ContactUs from "./Pages/ContactUs";
import Error from "./Pages/Error";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/author" element={<AuthorPage />} />
        <Route path="/authordetails" element={<AutherDetails />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/postview" element={<PostView />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/*" element={<Error />} />
      </Route>
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
