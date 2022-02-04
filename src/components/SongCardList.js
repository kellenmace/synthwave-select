import * as React from "react";
import styled from "styled-components";
import SongCard from "./SongCard";

export default function SongCardList({ songs }) {
  return (
    <StyledUl>
      {songs.map((song) => {
        return (
          <li key={song.databaseId}>
            <SongCard song={song} />
          </li>
        );
      })}
    </StyledUl>
  );
}

const StyledUl = styled.ul`
  list-style: none;
  li + li {
    margin-top: 2rem;
  }
`;
