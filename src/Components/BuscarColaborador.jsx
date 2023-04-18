import React from 'react'


const BuscarColaborador = ({ setBusqueda }) => {

 // onChange busqueda
  const handleOnChangeBusqueda = (e) => {
    setBusqueda(e.target.value);
  }

  return (
    <nav className="navbar navbar-white mb-4 p-3 bg-primary text-light ">
      
      <span className="navbar-brand text-light">
        Colaboradores
      </span>
      <input type="text" 
          placeholder="Buscar"
          onChange={handleOnChangeBusqueda}
          list="datalistOptions"
      />
      <datalist id="datalistOptions">
        <option value="Colaborador 1" />
        <option value="Colaborador 2" />
        <option value="Colaborador 3" />
      </datalist>
    </nav>
  )
}

export default BuscarColaborador