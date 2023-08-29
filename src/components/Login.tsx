import { useReducer, useEffect } from "react";

interface AuthState {
  validando: boolean;
  token: string | null;
  userName: string;
  nombre: string;
}

const initialState: AuthState = {
  validando: true,
  token: null,
  userName: "",
  nombre: "",
};
type LoginPayload = {
  userName: string;
  nombre: string;
};
type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        nombre: "",
        userName: "",
      };
    case "login":
      const { nombre, userName } = action.payload;
      return {
        validando: false,
        token: "abc",
        nombre: nombre,
        userName: userName,
      };
    default:
      return state;
  }
};
//-- inicio de componente
export const Login = () => {
  const [{ validando, token, nombre }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  if (validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validando...</div>
      </>
    );
  }

  const login = () => {
    dispatch({
      type: "login",
      payload: { nombre: "Alex", userName: "Aleexander2600" },
    });
  };

  const logout = () => {
    dispatch({ type: "logout" })
  }

  return (
    <>
      <h3>Login</h3>
      {token ? (
        <>
          <div className="alert alert-success">
            ¡Autenticado. Bienvenido {nombre}!
          </div>
          <button onClick={ logout } className="btn btn-danger">Logout</button>
        </>
      ) : (
        <>
          <div className="alert alert-danger">¡No autenticado!</div>
          <button onClick={ login } className="btn btn-primary">Login</button>
        </>
      )}
    </>
  );
};
