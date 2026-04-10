import styled, { ThemeProvider } from "styled-components";
import {
  AuthContextProvider,
  GlobalStyles,
  MenuMovil,
  Sidebar,
  Toogle,
  useUsuariosStore,
} from "./index";
import { Device } from "./styles/breakpoints";
import { MyRoutes } from "./index";
import { useThemeStore } from "./store/ThemeStore";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
function App() {
  const { themeStyle } = useThemeStore();
  return (
    <ThemeProvider theme={themeStyle}>
      <AuthContextProvider>
        <GlobalStyles></GlobalStyles>
        <MyRoutes></MyRoutes>
      </AuthContextProvider>
    </ThemeProvider>
  );
}
const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  transition: 0.1s ease-in-out;
  .contentSidebar {
    display: none;
  }
  .menuMenuambur {
    position: absolute;
  }
  .contentRoters {
    grid-column: 1;
    width: 100%;
  }
  @media ${Device.tablet} {
    grid-template-columns: 88px 1fr;
    &.active {
      grid-template-columns: 260px 1fr;
    }
    .contentSidebar {
      display: initial;
    }
    .menuMenuambur {
      display: none;
    }
    .contentRoters {
      grid-column: 2;
    }
  }
`;
export default App;
