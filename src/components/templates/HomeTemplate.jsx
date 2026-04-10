import styled from "styled-components";
import { Btn1 } from "../moleculas/Btn1";
import { useAuthStore } from "../../store/AuthStore";
import { userAuth } from "../../context/AuthContext";

export const HomeTemplate = () => {
  const { logoutGoogle } = useAuthStore();
  const { user } = userAuth();
  return (
    <Container>
      <span>componente</span>
      <Btn1 titulo="Cerrar sesion" funcion={logoutGoogle}></Btn1>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;
