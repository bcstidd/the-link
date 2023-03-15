import { Link } from 'react-router-dom';
import { artists } from '../../data';

export default function StylePage() {
  // Collect all the styles from the artists
  const allStyles = artists.reduce((acc, artist) => {
    artist.style.forEach((style) => {
      if (!acc.includes(style)) {
        acc.push(style);
      }
    })
    return acc;
  }, []);

  return (
    <div className='styleList'>
      <h1>Styles</h1>
      {allStyles.map((style) => (
        <div key={style}>
          <h2>{style}</h2>
          <ul>
            {artists
              .filter(artist => artist.style.includes(style))
              .map((artist) => (
                <li key={artist.id}>
                  <Link to={'/artists/selectedArtist'}>
                    {artist.name}
                  </Link> - {artist.location}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}