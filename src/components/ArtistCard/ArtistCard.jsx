import { Link } from "react-router-dom";

export default function ArtistCard(props) {
  return (
    <>
      <Link to={`/artists/${props.artist.name}`} className="artist-link">
        <div
          style={{
            background: `url(${props.artist.photo}) no-repeat center center`,
            WebkitBackgroundSize: "cover"
          }}
          className="card"
        >
          <div className="artist-name">
            <h1>{props.artist.name}</h1>
            <h4>Portfolio: {props.artist.portfolio}</h4>
          </div>
        </div>
      </Link>
    </>
  );
}