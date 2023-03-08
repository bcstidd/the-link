import { Link } from "react-router-dom";

export default function StyleCard(props) {
  return (
    <>
      <Link to={`/${props.style.style}`} className="style-link">
        <div className="card">
          <div className="a-style">
            <h1>{props.style.style}</h1>
            {/* <h4>Released: {props.movie.releaseDate}</h4> */}
          </div>
        </div>
      </Link>
    </>
  );
}
