import { useState } from 'react';
import './App.css';
import Clima from './components/Clima';
import Formulario from './components/Formulario';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [ciudad, setCiudad] = useState('');
  const [pais, setPais] = useState('');
  const [consultar, setConsultar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConsultar(true); // Esto activará la consulta
  };

  return (
    <section className='row'>
      <div className="col-12">
        <Formulario 
          pais={pais} 
          ciudad={ciudad} 
          setCiudad={setCiudad} 
          setPais={setPais} 
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="col-12">
        {/* Solo mostrar el componente Clima si el estado consultar es verdadero */}
        {consultar && <Clima pais={pais} ciudad={ciudad} />}
      </div>
    </section>
  );
}

export default App;
