interface Persona {
    nombreCompleto: string,
    edad: number,
    direccion: Direccion
}

interface Direccion {
    pais: string,
    casaNo: number,
}


export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: "alex",
    edad: 23,
    direccion: {
      pais: "Mexico",
      casaNo: 23,
    },
  };

  return (
    <>
        <h3>Objetos Literales</h3>
        {/* solo representa un objeto en su version string*/}
        <code>
            <pre>
            { JSON.stringify(persona, null, 2) }
            </pre>
        </code>
    </>
  )
};
