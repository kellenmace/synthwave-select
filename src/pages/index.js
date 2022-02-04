import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import SongCardList from "../components/SongCardList";

export default function Home() {
  const data = useStaticQuery(graphql`
    query getSongs {
      allWpSong {
        nodes {
          databaseId
          uri
          songTitle
          albumImage {
            mediaItemUrl
            altText
          }
          artist {
            nodes {
              databaseId
              name
            }
          }
        }
      }
    }
  `);
  const songs = data.allWpSong.nodes;

  return (
    <Layout>
      <StyledDiv>
        <h1>Songs</h1>
        <div className="song-card-list">
          <SongCardList songs={songs} />
        </div>
      </StyledDiv>
    </Layout>
  );
}

const StyledDiv = styled.div`
  @media (min-width: 650px) {
    margin-left: 4.5rem;
    margin-right: 4.5rem;
  }
  .song-card-list {
    margin-top: 2rem;
  }
`;
