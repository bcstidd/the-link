import ArtistCard from "../../components/ArtistCard/ArtistCard";

export default function ArtistIndexPage({ artists }) {

    return (
      <div>
        {artists.map((artist) => (
          <ArtistCard key={artist.name} artist={artist} />
        ))}
      </div>
    );
  }
