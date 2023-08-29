import { useCounter } from '../hooks/useCounter'

export const ContadorConHooks = () => {
    const { valor, acumular } = useCounter(100);
    return (
        <>
            <h3>Contador con hooks: <small> { valor } </small></h3>
            <button onClick={() => acumular(1)}  className="btn btn-primary"> +1 </button>
            &nbsp;
            <button onClick={() => acumular(-1)} className="btn btn-primary"> -1 </button>
        </>
      )
}                  
