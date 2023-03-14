import ArtistCard from "../ArtistCard/ArtistCard";

export default function ArtistIndexPage({ artists }) {
  return (
    <>
      {artists.map((artist, idx) => (
        <ArtistCard artist={artist} key={idx} />
      ))}
    </>
  );
}
