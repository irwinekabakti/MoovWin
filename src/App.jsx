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

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration")
      .then((res) => {
        console.log(res);

        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        }

        dispatch(getApiConfiguration(url))
      });
  };

  useEffect(() => {
    fetchApiConfig();
  }, []);

  return (
    <RouterProvider router={router}></RouterProvider>
  )
};

export default App;
