import { useSelector } from "react-redux";
import "./Genres.scss";

const Genres = ({ data }) => {
  const selector = useSelector((state) => state.homeStore);
  const selectedGenre = selector.genres;

  return (
    <div className="genres">
      {data?.map((genre) => {
        if (!selectedGenre[genre]?.name) return;
        return (
          <div key={genre} className="genre">
            {selectedGenre[genre]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
