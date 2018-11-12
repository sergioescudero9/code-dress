import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    background: ${props => props.theme.colors.secondary};
    font-family: 'helvetica neue';
    font-size: ${props => props.theme.sizes.fonts.main};
    font-weight: 200;
  }
  body {
    margin: 0;
  }
  /* @media (min-width: 680px) {
    body{
      
    }
  } */
  /* @media (min-width: 1224px) {
    body{
      font-size: 1.6em
    }
  }
  @media (min-width: 1400px) {
    body{
      font-size: 1.8em
    }
  } */

  *, *:before, *:after {
    box-sizing: inherit;
  }
  h1,h2,h3,h4,h5,p {
    margin: 0;
  }
`;
export default GlobalStyles;
