export const TiposBasicos = () => {
  const nombre: string = "alex";
  const edad: number = 23;
  const estaActivo: boolean = true;
  const poderes: string[] = ["Velocidad", "Volar", "Respirar en el agua"];

  return (
    <>
      <div>Tipos Basicos</div>
      {nombre}, {edad}, {estaActivo ? "esta activo" : "no esta activo"}
      <br />
      {poderes.join(" - ")}
    </>
  );
};
