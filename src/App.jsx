import RoutesApp from "./routes";

import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <RoutesApp />
    </ThemeProvider>
  );
}

export default App;
