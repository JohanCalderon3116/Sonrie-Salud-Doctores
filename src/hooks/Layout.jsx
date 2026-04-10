import styled from "styled-components";
import { Device } from "../styles/breakpoints";
import { useState } from "react";
import { useUsuariosStore } from "../store/UsuariosStore";
import { useQuery } from "@tanstack/react-query";
import { Sidebar } from "../components/organismos/sidebar/Sidebar";
import { Toogle } from "../components/moleculas/Toogle";
import { MenuMovil } from "../components/organismos/sidebar/MenuMovil";

export const Layout = ({ children }) => {
  const [stateMenu, setStateMenu] = useState(false);
  const [sidebearOpen, setSidebatOpen] = useState(false);
  const { mostrarusuarios } = useUsuariosStore();

  const { refetch } = useQuery({
    queryKey: ["mostrar usuarios"],
    queryFn: mostrarusuarios,
    refetchOnWindowFocus: false,
  });
  return (
    <Container className={sidebearOpen ? "active" : ""}>
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
      <Containerbody>{children}</Containerbody>
    </Container>
  );
};

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
const Containerbody = styled.section`
  grid-column: 1;
  width: 100%;
  @media ${Device.tablet} {
    grid-column: 2;
  }
`;
