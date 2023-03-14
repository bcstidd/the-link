import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
// import HomePage from "../HomePage/HomePage";
// import FeaturedArtistsPage from "../FeaturedArtistsPage/FeaturedArtistsPage";
import ArtistIndexPage from "../ArtistIndexPage/ArtistIndexPage";
import NavBar from "../../components/NavBar/NavBar";
// import StylePage from "../StylePage/StylePage";
import ArtistBioPage from "../ArtistBioPage/ArtistBioPage";
import * as artistsAPI from "../../utilities/artists-api";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [artist, setArtist] = useState([""]);

  useEffect(function () {
    async function getArtist() {
      let artists = await artistsAPI.getAllArtists();
      setArtist(artists);
    }
    getArtist();
  }, []);

  return (
    <main className="App">
      {<h1>The [L]ink</h1>}
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<ArtistIndexPage artist={artist} />} />
            <Route
              path="/:selectedArtist"
              element={<ArtistBioPage useState={useState} artist={artist} />}
            />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
