import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Emoji from "./Emoji";

export default function SongCard({ song }) {
  const { uri, songTitle, albumImage, artist } = song;
  const artistNames = artist.nodes.map((artist) => artist.name).join(", ");
  if (!albumImage) return null;

  return (
    <StyledArticle>
      <Link to={uri}>
        <img src={albumImage.mediaItemUrl} alt={albumImage.altText} />
      </Link>
      <div className="details">
        <Link to={uri}>
          <h2>{songTitle}</h2>
        </Link>
        <div className="artist">
          <Emoji symbol="👩‍🎤" label="Album" />
          <p>{artistNames}</p>
        </div>
      </div>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  border: 2px solid var(--color-pink-5);
  border-radius: var(--border-radius);
  box-shadow: 0 0 15px var(--color-pink-5);
  img {
    max-width: 100%;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }
  .details {
    padding: 2rem;
  }
  .artist {
    display: flex;
    margin-top: 1rem;
    font-size: 0.8rem;
    p {
      margin: 0;
      padding-left: 0.5rem;
    }
  }
  a {
    text-decoration: none;
  }
`;
