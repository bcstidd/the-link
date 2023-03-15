import { useState } from 'react';
import { artists } from '../../data';

export default function StylePage() {
  // Collect all the styles from the artists
  const allStyles = artists.reduce((acc, artist) => {
    artist.style.forEach((style) => {
      if (!acc.includes(style)) {
        acc.push(style);
      }
    });
    return acc;
  }, []);

  const [selectedStyle, setSelectedStyle] = useState(null);

  // Filter the artists by the selected style
  const filteredArtists = selectedStyle
    ? artists.filter((artist) => artist.style.includes(selectedStyle))
    : artists;

  return (
    <div className='styleList'>
      <h1>Styles</h1>
      <ul>
        {allStyles.map((style) => (
          <li key={style} onClick={() => setSelectedStyle(style)}>
            {style}
          </li>
        ))}
      </ul>
      {selectedStyle && (
        <div>
          <h2>{selectedStyle} Artists</h2>
          <ul>
            {filteredArtists.map((artist) => (
              <li key={artist.id}>{artist.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
