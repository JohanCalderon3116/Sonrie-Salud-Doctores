import { create } from "zustand";
import {
  InsertarUsuario,
  MostrarUsuarios,
  ObtenerIdAuthSupabase,
} from "../supabase/crudUsuarios";

export const useUsuariosStore = create((set) => ({
  datausuarios: [],
  mostrarusuarios: async () => {
    const idauth = await ObtenerIdAuthSupabase();
    const response = await MostrarUsuarios({ id_auth: idauth });
    set({ datausuarios: response });
    return response;
  },
  insertarUsuarios: async (p) => {
    await InsertarUsuario(p);
  },
}));
