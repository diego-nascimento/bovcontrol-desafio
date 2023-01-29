import {createGlobalStyle, css} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0px;
    outline: 0px;
    margin: 0px;
    box-sizing: border-box;
    border: none;
    list-style: none;
    text-decoration: none;
  }

  html {
    font-size: 62.5%; 
  }

  body {
    ${({theme}) => css`
      background-color:${theme.colors.background};
      font-family: ${theme.fonts.family};
      font-size: 1.6rem;
    `};
    
  }
`
