import "./styles.css";
import { useState } from "react";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider
} from "@mantine/core";
import { AppShell, Global } from "@mantine/core";
import AppHeader from "./components/AppHeader";
import theme from "../../public/resources/themes/theme.json";
import AppSidebar from "./components/AppSidebar";

export default function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    theme.colorScheme
  );

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || colorScheme === "dark" ? "light" : "dark");

  const [asideOpened, setAsideOpened] = useState(false);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          ...theme,
          colorScheme
        }}
        withGlobalStyles
        withNormalizeCSS
        withCSSVariables
      >
        <Global
          styles={(theme) => ({
            // ".rtv-btn": {
            //   color: theme.colorScheme === "dark" ? "#eeeeee" : "#333333"
            // }
          })}
        />
        <AppShell
          className="App"
          header={
            <AppHeader
              asideOpened={asideOpened}
              setAsideOpened={setAsideOpened}
            />
          }
          aside={<AppSidebar opened={asideOpened} />}
          sx={{ letterSpacing: "0.1rem", textAlign: "center" }}
          children={""}
        ></AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
