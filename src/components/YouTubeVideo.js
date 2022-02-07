import * as React from "react";
import styled from "styled-components";

export default function YouTubeVideo({ youTubeVideoID }) {
  return (
    <StyledDiv>
      <iframe
        width="560"
        height="349"
        src={`https://www.youtube.com/embed/${youTubeVideoID}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
