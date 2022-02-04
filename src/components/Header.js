import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Emoji from "../components/Emoji";

export default function Header() {
  return (
    <StyledHeader>
      <p className="emoji">
        <Emoji symbol="👩‍🎤" label="Female singer" />
        <Emoji symbol="👨‍🎤" label="Male singer" />
      </p>
      <h1>Synthwave SELECT</h1>
      <ul>
        <li>
          <Link to="/">Songs</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/merch">Merch</Link>
        </li>
      </ul>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  padding-top: 1.5rem;
  text-align: center;
  .emoji {
    margin: 0;
    font-size: 10rem;
    line-height: 10rem;
  }
  h1 {
    margin-top: 1.5rem;
    font-size: 2.5rem;
    letter-spacing: 3px;
    text-shadow: var(--color-pink-5) 0px 0px 17px,
      var(--color-pink-5) 0px 0px 17px;
  }
  ul {
    display: flex;
    margin-top: 1.5rem;
    list-style: none;
    justify-content: center;
  }
  li {
    padding: 1rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-shadow: var(--color-pink-5) 0px 0px 13px,
      var(--color-pink-5) 0px 0px 13px;
  }
  li + li {
    border-left: 2px solid var(--color-pink-4);
  }
  a {
    text-decoration: none;
  }
`;
