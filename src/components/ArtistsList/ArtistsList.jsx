import ArtistCard from "../ArtistCard/ArtistCard";

export default function ArtistIndexPage({ artist }) {
  return (
    <>
      {artist.map((artist, idx) => (
        <ArtistCard artist={artist} key={idx} />
      ))}
    </>
  );
}
