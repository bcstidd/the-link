import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import { artists } from '../../data'
import AuthPage from '../AuthPage/AuthPage';
import FeaturedArtistsPage from '../FeaturedArtistsPage/FeaturedArtistsPage';
import NavBar from '../../components/NavBar/NavBar'
import ArtistIndexPage from '../ArtistIndexPage/ArtistIndexPage';
import HomePage from '../HomePage/HomePage';
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
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/artists" element={<ArtistIndexPage artists={artists} />} />
            <Route path="/featured" element={<FeaturedArtistsPage />} />
          </Routes>
  
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}


