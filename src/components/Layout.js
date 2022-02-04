import * as React from "react";
import "@fontsource/orbitron/500.css";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <StyledMain>{children}</StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  margin: 4rem auto;
  max-width: 650px;
  padding-left: 1rem;
  padding-right: 1rem;
`;
