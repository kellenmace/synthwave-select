import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import YouTubeVideo from "../components/YouTubeVideo";
import Emoji from "../components/Emoji";

export default function Song(props) {
  const {
    song: { songTitle, album, youTubeVideoID, artist },
  } = props.pageContext;
  const artistNames = artist.nodes.map((artist) => artist.name).join(", ");

  return (
    <Layout>
      <StyledArticle>
        <h1>{songTitle}</h1>
        <div className="details">
          <div className="detail">
            <Emoji symbol="💿" label="Album" />
            <p>{album}</p>
          </div>
          <div className="detail">
            <Emoji symbol="👩‍🎤" label="Album" />
            <p>{artistNames}</p>
          </div>
        </div>
        <YouTubeVideo youTubeVideoID={youTubeVideoID} />
      </StyledArticle>
    </Layout>
  );
}

const StyledArticle = styled.article`
  .details {
    margin: 2.5rem 0;
  }
  .detail {
    display: flex;
    p {
      margin: 0;
      padding-left: 0.5rem;
    }
  }
  .detail + .detail {
    margin-top: 1rem;
  }
`;
