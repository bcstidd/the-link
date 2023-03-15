import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import HomePage from "../HomePage/HomePage";
// import FeaturedArtistsPage from "../FeaturedArtistsPage/FeaturedArtistsPage";
import ArtistIndexPage from "../ArtistIndexPage/ArtistIndexPage";
import NavBar from "../../components/NavBar/NavBar";
// import StylePage from "../StylePage/StylePage";
import ArtistBioPage from "../ArtistBioPage/ArtistBioPage";
import * as artistsAPI from "../../utilities/artists-api";
import * as reviewsAPI from "../../utilities/reviews-api"

export default function App() {
  const [user, setUser] = useState(getUser());
  const [artists, setArtists] = useState([""]);
  const [review, setReview] = useState(['']);

  async function deleteReview(deleteReview) {
    const newReviews = await reviewsAPI.deleteReview(
      deleteReview
    );
    setReview(newReviews);
  }

  async function update(updateReview) {
    const newReviews = await reviewsAPI.updateReview(
      updateReview
    );
    setReview(newReviews);
  }

  useEffect(function () {
    async function getArtists() {
      let artists = await artistsAPI.getAllArtists();
      setArtists(artists);
    }
    getArtists();
  }, []);

  return (
    <main className="App">
      <div className='title'>{<h1>The [L]ink</h1>}</div>
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='' element={<HomePage />} />
            <Route  path="/artists"
              element={<ArtistIndexPage artists={artists} />}
            />
            <Route
              path="/artists/:selectedArtist"
              element={
                <ArtistBioPage
                  useState={useState}
                  user={user}
                  setUser={setUser}
                  artists={artists}
                  deleteReview={deleteReview}
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
