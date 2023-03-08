import ArtistCard from "../../components/ArtistCard/ArtistCard";
// import {artists} from "../../data.js";

// import "./MoviesListPage.css";
// export default function ArtistIndexPage({artists}) {
//   const [selectedStyle, setSelectedStyle] = useState(null);

//   const handleStyleClick = (style) => {
//       setSelectedStyle(style);
//   };

//   const filteredArtists = artists.filter((artist) => {
//       return artist.style.includes(selectedStyle);
//   });

//   const styles = artists.reduce((styles, artist) => {
//       artist.style.forEach((style) => {
//           if (!styles.includes(style)) styles.push(style);
//       });
//       return styles;
//   }, []);
  
//   return (
//       <div className="container">
//           <nav>
//               {styles.map((style) => {
//                   return (
//                       <StylePage
//                           key={style}
//                           style={style}
//                           isActive={style === selectedStyle}
//                           onClick={() => handleStyleClick(style)}
//                       />
//                   );
//               })}
//           </nav>
//           {filteredArtists.map((artist) => {
//               return <ArtistCard key={artist.name} artist={artist} />;
//           })}
//       </div>
//   );
// }
export default function ArtistIndexPage({ artists }) {
    if (!Array.isArray(artists)) {
        console.log(typeof artists)
      return <div>No artists found.</div>;
    }
  
    return (
      <div>
        {artists.map((artist) => (
          <ArtistCard key={artist.name} artist={artist} />
        ))}
      </div>
    );
  }
