import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { RouterProvider } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/action-slice/home-slice";
import router from "./routes/Routes";

const App = () => {
  const selector = useSelector((state) => state.homeStore)
  const selectedUrl = selector.url
  console.log(selectedUrl.total_pages)
  const dispatch = useDispatch()

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular")
      .then((res) => {
        console.log(res);
        dispatch(getApiConfiguration(res))
      });
  };

  useEffect(() => {
    apiTesting();
  }, []);

  return (
    <RouterProvider router={router}></RouterProvider>
  )
};

export default App;
