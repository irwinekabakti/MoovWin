import React, { Fragment } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Img from "../lazyLoadImage/Img";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";
import PosterFallback from "../../assets/no-poster.png";
import "./MovieCard.scss";

const MovieCard = ({ data, fromSearch, mediaType }) => {
  const selector = useSelector((state) => state.homeStore);
  const selectedUrl = selector.url;
  const navigate = useNavigate();
  const posterUrl = data.poster_path
    ? selectedUrl.poster + data.poster_path
    : PosterFallback;

  return (
    <div
      className="movieCard"
      onClick={() => navigate(`/${data.media_type || mediaType}/${data.id}`)}>
      <div className="posterBlock">
        <Img className="posterImg" src={posterUrl} />
        {!fromSearch && (
          <Fragment>
            <CircleRating rating={data.vote_average.toFixed(1)} />
            <Genres data={data.genre_ids.slice(0, 2)} />
          </Fragment>
        )}
      </div>
      <div className="textBlock">
        <span className="title">{data.title || data.name}</span>
        <span className="date">
          {dayjs(data?.release_date || data?.first_air_date).format(
            "MMM D, YYYY"
          )}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
