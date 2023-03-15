import './ArtistIndexPage.css'
import ArtistsList from "../../components/ArtistsList/ArtistsList";

export default function ArtistIndexPage({ artists }) {
  return (
    <div className='artist-list'>
      <ArtistsList artists={artists} />
    </div>
  );
}
