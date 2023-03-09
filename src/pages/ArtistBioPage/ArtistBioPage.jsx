import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewPageForm from '../../components/ReviewPageForm/ReviewPageForm'

export default function ArtistBioPage({ artists }) {
  const { name } = useParams();
  const artist = artists.find(artist => artist.name === name);

  return (
    <div>
      {artist ? (
        <>
          <div className="bio-page">
            <h2>{artist.name}</h2>
            <h3>{artist.shop}</h3>
            <h3>Specializes in {artist.style.join(', ')}</h3> {/* Display styles as a space-separated list */}
            <img src={artist.photo} alt=""/>
            <div>
              <h2>Reviews</h2>
              
            </div>
            <ReviewPageForm />
            <h2>Interested in learning more? View {artist.name}'s Portfolio <a href={artist.portfolio}>Here</a></h2>
          </div>
        </>
      ) : (
        <p>Sorry, we couldn't find an artist with that name.</p>
      )}
    </div>
  );
}