import { Fragment } from "react";
import "./Home.scss";
import Header from "../../components/header/Header";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <div className="homePage">
        <HeroBanner />
        <Trending />
        <Popular />
      </div>
      <div style={{ height: 1000 }}></div>
      <Footer />
    </Fragment>
  );
};

export default Home;
