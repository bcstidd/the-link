import { Link } from "react-router-dom";
import { useState } from "react";
import "./StylePage.css";

export default function StyleList() {
  // group artists by style
  // const artistsByStyle = artists.reduce((acc, artist) => {
  //   artist.style.forEach((style) => {
  //     if (!acc[style]) {
  //       acc[style] = [];
  //     }

  //     acc[style].push(artist);
  //   });

  //   return acc;
  // }, {});

  // state for tracking open/closed state of each style
  // const [openStyles, setOpenStyles] = useState({});

  // const toggleStyle = (style) => {
  //   setOpenStyles((prevState) => ({
  //     ...prevState,
  //     [style]: !prevState[style],
  //   }));
  // };

  return (
    <div>
      {/* {Object.keys(artistsByStyle).map((style) => (
        <div key={style}>
          <h2>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleStyle(style);
              }}
            >
              {style}
            </a>
          </h2>
          {openStyles[style] && (
            <div className="styles-list">
              {artistsByStyle[style].map((artist) => (
                <div key={artist.id}>
                  <Link to={`/artists/bio/${artist.name}`}>
                    <h3>{artist.name}</h3>
                  </Link>
                  <h5>{artist.location}</h5>
                </div>
              ))}
            </div>
          )}
        </div>
      ))} */}
    </div>
  );
}
