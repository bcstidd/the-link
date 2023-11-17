// /src/pages/App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import ArtistIndexPage from '../ArtistIndexPage/ArtistIndexPage';
import NavBar from '../../components/NavBar/NavBar';
import ArtistBioPage from '../ArtistBioPage/ArtistBioPage';
import * as artistsAPI from '../../utilities/artists-api';
import * as reviewsAPI from '../../utilities/reviews-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [artists, setArtists] = useState([]);
  const [reviews, setReviews] = useState([]);

  async function deleteReview(reviewId) {
    try {
      const newReviews = await reviewsAPI.deleteReview(reviewId);
      setReviews(newReviews);
    } catch (error) {
      console.error(error);
    }
  }

  async function updateReview(updatedReview) {
    try {
      const newReviews = await reviewsAPI.updateReview(updatedReview);
      setReviews(newReviews);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function fetchArtists() {
      try {
        const fetchedArtists = await artistsAPI.getAllArtists();
        setArtists(fetchedArtists);
      } catch (error) {
        console.error(error);
      }
    }

    fetchArtists();
  }, []);

  return (
    <main className="App">
      <div className="title">
        {<h1>The [L]ink</h1>}
      </div>
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Uncomment the line below when StylePage is ready */}
            {/* <Route path="/styles" element={<StylePage artists={artists} />} /> */}
            <Route path="/artists" element={<ArtistIndexPage artists={artists} />} />
            <Route
              path="/artists/:selectedArtist"
              element={
                <ArtistBioPage
                  user={user}
                  setUser={setUser}
                  artists={artists}
                  deleteReview={deleteReview}
                  updateReview={updateReview}
                  reviews={reviews}
                />
              }
            />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
