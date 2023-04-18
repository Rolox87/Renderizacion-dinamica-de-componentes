import React, { useState } from "react";

const Colaborador = ({ colaboradores, setColaboradores }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  
  const handleOnChangeNombre = (event) => setNombre(event.target.value);
  const handleOnChangeCorreo = (event) => setCorreo(event.target.value);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const nuevoColaborador = {
      id: Date.now(),
      nombre: nombre,
      correo: correo,
    };
    setColaboradores([...colaboradores, nuevoColaborador]);
    setNombre("");
    setCorreo("");
    document.getElementById("nombre").focus();
  };

  return (
    <div className="col-10 col-md-6 col-lg-4 mx-auto">
      <form
        className="mb-4 p-10   "
        onSubmit={handleOnSubmit}
      >
        <div className="mb-3 form-floating">
          <input
            id="nombre"
            type="text"
            className="form-control"
            value={nombre}
            placeholder="Nombre colaborador"
            onChange={handleOnChangeNombre}
          />
          <label htmlFor="nombre">Nombre Colaborador</label>
        </div>
        <div className="mb-3 form-floating">
          <input
            type="email"
            name="correo"
            className="form-control"
            value={correo}
            placeholder="Correo colaborador"
            onChange={handleOnChangeCorreo}
          />
          <label htmlFor="correo">Correo Colaborador</label>
        </div>
      { nombre.length && correo.length >= 5 
        ? <button type="submit" id="btn-submit" className="w-100 btn btn-success">Agregar</button>
        : <div className="form-text text-danger">Completa campos para habilitar botón agregar (mínimo de caracteres 5)</div>
      }
      </form>
    </div>
  );
};

export default Colaborador;