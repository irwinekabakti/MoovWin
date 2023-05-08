import { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
// import CircleRating from "../circleRating/CircleRating";
// import Genres from "../genres/Genres";
import "./Carousel.scss";

const Carousel = ({ data, loading }) => {
  const carouselContainer = useRef();
  const selector = useSelector((state) => state.homeStore);
  const selectedUrl = selector.url;

  // const { url } = useSelector((state) => state.home);

  const navigate = useNavigate();

  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock"></div>
        <div className="textBlock">
          <div className="title"></div>
          <div className="date"></div>
        </div>
      </div>
    );
  };

  const navigation = (dir) => {};

  return (
    <div className="carousel">
      <ContentWrapper>
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="carouselRightNav arrow"
          onClick={() => navigation("right")}
        />
        {!loading ? (
          <div className="carouselItems">
            {data?.map((item) => {
              const posterUrl = item.poster_path
                ? selectedUrl.poster + item.poster_path
                : PosterFallback;
              return (
                <div key={item.id} className="carouselItem">
                  <div className="posterBlock">
                    <Img src={posterUrl} />
                  </div>
                  <div className="textBlock">
                    <span className="title">{item.title || item.name}</span>
                    <span className="title">
                      {dayjs(item.releaseDate).format("MMM D, YYYY")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
