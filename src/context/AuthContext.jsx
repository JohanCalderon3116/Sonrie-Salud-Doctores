import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase.config";
import { InsertarUsuario, MostrarUsuarios } from "../supabase/crudUsuarios";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user == null) {
        setUser(null);
      } else {
        setUser(session?.user);
        console.log("session", session);
      }
      insertarDatos(
        session?.user.id,
        session?.user.email,
        session?.user.user_metadata.name,
      );
    });
    return () => {
      data.subscription;
    };
  }, []);
  const insertarDatos = async (id_auth, correo, nombre) => {
    const response = await MostrarUsuarios({
      id_auth: id_auth,
      correo: correo,
      nombre: nombre,
    });
    if (response) {
      return;
    } else {
      await InsertarUsuario({
        id_auth: id_auth,
        correo: correo,
        nombre: nombre,
      });
    }
  };
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
export const userAuth = () => {
  return useContext(AuthContext);
};
