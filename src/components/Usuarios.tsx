import { useUsuarios } from "../hooks/useUsuarios";
import { Usuario } from "../interfaces/reqRes";

export const Usuarios = () => {
  const { paginaRef, usuarios, siguienteButton, anteriorButton } = useUsuarios();  

  const renderItem = ({ id, first_name, email, avatar }: Usuario) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            style={{ width: 35, borderRadius: 100 }}
            src={avatar}
            alt={first_name}
          />
        </td>
        <td>{first_name}</td>
        <td>{email}</td>
      </tr>
    );
  };
  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map(renderItem)}</tbody>
      </table>
      <button className="btn btn-danger" disabled={ paginaRef.current === 1 } onClick={anteriorButton}>
        Anterior
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={siguienteButton}>
        Siguiente
      </button>
    </>
  );
};
