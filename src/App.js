import './App.css';
import { BaseColaboradores } from './DataBase/Data';
import { useState } from 'react'
import Colaborador from './Components/Colaborador';
import BuscarColaborador from './Components/BuscarColaborador';
import ListadoColaborador from './Components/ListaColaborador';


function App() {
const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [busqueda, setBusqueda] = useState("");

  let resultados = [];
  if (!busqueda) {
    resultados = colaboradores;
  } else {
    resultados = colaboradores.filter((colaborador) =>
      colaborador.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase()))
  }
  return (
    <div className="App">
      <BuscarColaborador
        setBusqueda={setBusqueda} />
      <div className="container row mx-auto">
        <Colaborador colaboradores={colaboradores} setColaboradores={setColaboradores} />
        <ListadoColaborador colaboradores={resultados} />
      </div>
    </div>
  );
}

export default App;
