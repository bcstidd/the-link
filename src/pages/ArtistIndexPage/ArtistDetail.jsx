import { useParams } from "react-router-dom";

export default function ArtistDetail({ artists }) {
  let { artistName } = useParams();

  let artist = artists.find((art) => art.name === artistName);

  return (
    <div className="flex">
      <div>
        <h1>{artist.name}</h1>
        <h2>{artist.shop}</h2>
        <h3>Speciality:</h3>
        <div class="styles-list">
          {artist.style.map((artist) => {
            return <p key={artist}>{artist}</p>;
          })}
        </div>
      </div>
      <img src={`${artist.photo}`} alt="" />
    </div>
  );
}
