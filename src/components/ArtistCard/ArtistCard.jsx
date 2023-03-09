import { Link } from "react-router-dom";
import './ArtistCard.css'
export default function ArtistCard(props) {
  return (
    <>
      <Link to={`/artists/bio/${props.artist.name}`} className="artist-link">
        <div
          style={{
            background: `url(${props.artist.cover}) no-repeat center center`,
            WebkitBackgroundSize: "cover",
            height: "200px",
            width: "300px"
          }}
          className="card"
        >
          <div className="artist-name">
            <h1>{props.artist.name}</h1>
            <h4>{props.artist.style.join(' | ')}</h4> {/* Display styles as a space-separated list */}
          </div>
        </div>
      </Link>
    </>
  );
}