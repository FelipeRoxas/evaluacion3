import React, {useState, useEffect} from 'react';
import Formulario from './components/Formilario';
import ListaEventos from './components/ListaEventos';

Function App() {
  const [eventos, setEventos] = useState ([]);

  useEffect (() => {
    const datos = localStorage.getItem('eventos');
    if (datos) {
      setEventos(JSON.parse(datos));
    }
  })
}, []);

useEffect(() => {
  localStorage.setItem('eventos',JSON.stringify(eventos));
}, [eventos]);

return (
  <div class name="App">
    <h1>Gestion de eventos comunitarios</h1>
    <Formulario eventos={eventos} setEventos={setEventos} />
    <ListaEventos eventos={eventos} setEventos={setEventos} />
  </div>
);
}


export default App;
