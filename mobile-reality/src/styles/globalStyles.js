import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  html {
    min-height: 100%;
    padding-top: 80px;
    @media ${({ theme }) => theme.medias.mobile} {
        padding-top: 60px;
    }
  }

  * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
