import { reqResApi } from "../api/reqResp";
import { ReqResponseListado, Usuario } from "../interfaces/reqRes";
import { useEffect, useRef, useState } from "react";

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  useEffect(() => {
    cargarUsuarios();
  }, []);

  const paginaRef = useRef(1);

  const cargarUsuarios = async () => {
    //-- llamado API
    const resp = await reqResApi.get<ReqResponseListado>("/users", {
      params: {
        page: paginaRef.current,
      },
    });
    if (resp.data.data.length > 0) {
      setUsuarios(resp.data.data);
    } else {
        alert("No hay mas registros");
        paginaRef.current--;
    }
  };

  const siguienteButton = () => {
    paginaRef.current++;
    cargarUsuarios();
  };

  const anteriorButton = () => {
    paginaRef.current--;
    cargarUsuarios();
  };

  return {
    paginaRef,
    usuarios,
    siguienteButton,
    anteriorButton,
  };
};
