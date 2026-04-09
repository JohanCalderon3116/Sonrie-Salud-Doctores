import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles, MenuMovil, Sidebar, Toogle } from "./index";
import { Device } from "./styles/breakpoints";
import { MyRoutes } from "./index";
import { useThemeStore } from "./store/ThemeStore";
import { useState } from "react";
function App() {
  const { themeStyle } = useThemeStore();
  const [stateMenu, setStateMenu] = useState(false);
  const [sidebearOpen, setSidebatOpen] = useState(false);
  return (
    <ThemeProvider theme={themeStyle}>
      <Container>
        <GlobalStyles></GlobalStyles>
        <section className="contentSidebar">
          <Sidebar
            state={sidebearOpen}
            setState={() => setSidebatOpen(!sidebearOpen)}
          ></Sidebar>
        </section>
        <section className="menuMenuambur">
          <Toogle
            state={stateMenu}
            setstate={() => setStateMenu(!stateMenu)}
          ></Toogle>
          {stateMenu && (
            <MenuMovil setState={() => setStateMenu(!stateMenu)}></MenuMovil>
          )}
        </section>
        <section className="contentRoters">
          <MyRoutes></MyRoutes>
        </section>
      </Container>
    </ThemeProvider>
  );
}
const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: black;
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
