import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import { artists, styles } from '../../data';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import FeaturedArtistsPage from '../FeaturedArtistsPage/FeaturedArtistsPage';
import ArtistIndexPage from '../ArtistIndexPage/ArtistIndexPage';
import NavBar from '../../components/NavBar/NavBar'
import StylePage from '../StylePage/StylePage';
import ArtistBioPage from '../ArtistBioPage/ArtistBioPage';

export default function App() {
  const [ user, setUser ] = useState(getUser())

  return (
    <main className="App">
      {
        <h1>The [L]ink</h1>}
        { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/artists" element={<ArtistIndexPage artists={artists} />} />
            <Route path="/artists/bio/:name" element={<ArtistBioPage artists={artists} user={user} />} />
            <Route path="/styles" element={<StylePage styles={styles} />} />
            <Route path="/featured" element={<FeaturedArtistsPage />} />
          </Routes>
  
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}