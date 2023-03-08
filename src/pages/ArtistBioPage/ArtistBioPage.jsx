import { useParams } from 'react-router-dom';

export default function ArtistBioPage({ artists }) {
  // Access the `name` parameter from the URL using `useParams`
  const { name } = useParams();

  // Find the artist object with the matching `name` property from the `artists` array
  const artist = artists.find(artist => artist.name === name);

  // Render the artist's bio if the artist object is found, or an error message if not
  return (
    <div>
      {artist ? (
        <>
          <h2>{artist.name}</h2>
          <h3>{artist.shop}</h3>
          <h4>Known for: {artist.style.join(', ')}</h4> {/* Display styles as a space-separated list */}
          <img src={artist.photo} alt=""/>
          <h2>Interested in learning more? View {artist.name}'s Portfolio <a href={artist.portfolio}>Here</a></h2>
        </>
      ) : (
        <p>Sorry, we couldn't find an artist with that name.</p>
      )}
    </div>
  );
}
