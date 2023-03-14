import ArtistsList from "../../components/ArtistsList/ArtistsList";

export default function ArtistIndexPage({ artists }) {
  return (
    <div>
      <ArtistsList artists={artists} />
    </div>
  );
}
