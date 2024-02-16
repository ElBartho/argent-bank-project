import { createGlobalStyle } from 'styled-components';
import { colors } from './mainStyle';

const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${colors.secondary};
  }

  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

function GlobalStyle() {
  return <StyledGlobalStyle />;
}

export default GlobalStyle;
