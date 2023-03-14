import "./FeaturedArtistCard.css";

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export default function ArtistCard({ artist }) {
  let num = getRandomNumber(200, 400);

  return (
    <div
      style={{
        background: `url(https://picsum.photos/${num}) no-repeat center center`,
        WebkitBackgroundSize: "cover",
      }}
      className="card"
    >
      <div className="name">
        <h1>{artist}</h1>
      </div>
    </div>
  );
}
