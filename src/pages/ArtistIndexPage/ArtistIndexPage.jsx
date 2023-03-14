import ArtistsList from "../../components/ArtistsList/ArtistsList";

export default function ArtistIndexPage({ artist }) {
  return (
    <div>
      <ArtistsList artist={artist} />
    </div>
  );
}
