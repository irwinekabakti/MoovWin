import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import "./HeroBanner.scss";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");

  const selector = useSelector((state) => state.homeStore);
  const selectedUrl = selector.url;

  const { data, loading } = useFetch("/movie/upcoming");
  const navigate = useNavigate();

  useEffect(() => {
    const bg =
      selectedUrl.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const changeQueryHandler = (e) => {
    setQuery(e.target.value);
  };

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} alt="background-image" />
        </div>
      )}

      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="wrapper">
          <div className="heroBannerContent">
            <span className="title">Welcome</span>
            <span className="subTitle">
              Million of movies, TV shows and people to discover. Explore now.
            </span>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movie or tv show..."
                onKeyUp={searchQueryHandler}
                onChange={changeQueryHandler}
              />
              <button>Search</button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
