import { createGlobalStyle } from "styled-components";
import neon from "../images/neon.jpg";

const GlobalStyles = createGlobalStyle`
  /**
   * Custom properties
   */
  :root {
    --font-family-main: -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Oxygen-Sans','Ubuntu','Cantarell','Helvetica Neue','Helvetica','Arial',sans-serif;
    --border-radius: 8px;
    --color-pink-1: #1e0621;
    --color-pink-2: #320e35;
    --color-pink-3: #4b1654;
    --color-pink-4: #6c2676;
    --color-pink-5: #d376e0;
    --color-pink-6: #e885f3;
    --color-pink-7: #ef4174;
    --color-dark-purple: #110629;
    --color-yellow: #f8d253;
  }

  /**
   * Global styles
   */
  html {
    box-sizing: border-box;
    background: rgba(17, 6, 41, 0.6) url(${neon}) no-repeat center center fixed;
    background-size: cover;
    background-blend-mode: darken;
    font-family: "Orbitron";
    color: var(--color-pink-6);
    text-shadow: var(--color-pink-5) 0px 0px 15px;
    line-height: 1.8;
    font-size: 1.14rem;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    @media (min-width: 500px) {
      font-size: 1.28rem;
    }
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family-accent);
    color: var(--color-brown);
    letter-spacing: 1px;
    margin: 0;
  }
  h1 {
    font-size: 2.3rem;
    line-height: 1.2;
  }
  h2 {
    font-size: 1.9rem;
    line-height: 1.3;
  }
  h3 {
    font-size: 1.7rem;
    line-height: 1.4;
  }
  h4 {
    font-size: 1.5rem;
    line-height: 1.5;
  }
  h5 {
    font-size: 1.2rem;
    line-height: 1.6;
  }
  h6 {
    font-size: 1rem;
    line-height: 1.7;
  }
  ::selection {
    background: var(--color-yellow-7);
  }
  ::placeholder {
    color: var(--color-gray-6);
  }
  a {
    color: var(--color-grey-2);
    &:visited {
      color: var(--color-grey-2);
    }
  }
  ul {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
