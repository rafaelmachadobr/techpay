import RoutesApp from "./routes";
import { ThemeProvider } from "styled-components";
import usePersistedState from "./utils/usePersistedState";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import { GlobalStyle } from "./styles/global";
import Header from "./components/Header";

function App() {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <RoutesApp />
    </ThemeProvider>
  );
}

export default App;
