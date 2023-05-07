import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Details from "../pages/details/Details";
import SearchResult from "../pages/searchResult/SearchResult";
import Explore from "../pages/explore/Explore";
import NotFound from "../pages/404/NotFound";

const router = createBrowserRouter([
   {path:'/', element: <Home />},
   {path:'/:mediaType/:id', element: <Details />},
   {path:'/search/:query', element:<SearchResult />},
  {path:'/explore/:mediaType', element:<Explore />},
  {path:'*', element: <NotFound />}
])

export default router