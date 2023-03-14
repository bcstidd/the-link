import { Link } from "react-router-dom";
import "./ArtistCard.css";

export default function ArtistCard({ artist }) {
  return (
    <Link to={`/artists/${artist._id}`}>
      <div
        style={{
          background: `url(${artist.cover}) no-repeat center center`,
          WebkitBackgroundSize: "cover",
          height: "200px",
          width: "300px",
        }}
        className="card"
      >
        <div className="artist-name">
          <h1>{artist.name}</h1>
        </div>
      </div>
    </Link>
  );
}
