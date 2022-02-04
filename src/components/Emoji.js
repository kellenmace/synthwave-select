import React from "react";
import styled from "styled-components";

export default function Emoji({ symbol, label }) {
  return (
    <StyledSpan
      className="emoji"
      role="img"
      aria-label={label || ``}
      aria-hidden={label ? `false` : `true`}
    >
      {symbol}
    </StyledSpan>
  );
}

const StyledSpan = styled.span`
  font-style: normal;
`;
