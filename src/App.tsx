import './App.css';
import Card from './components/Card';
import { usePersonajes } from './hooks/usePersonajes';

function App() {

  const {
    personajesFiltrados,
    cargando,
    error,
    busqueda,
    setBusqueda,
    seleccionado,
    setSeleccionado,
  } = usePersonajes();

  // Control de pantallas de la API
  //Esta es la pantalla de cuando intenta la página cargar las imágenes pero tarda más de lo debido
  if (cargando) {
    return (
      <div className="centro-pantalla">
        <div className="cargador"></div>
        <p>Buscando biografías de los autores...</p>
      </div>
    );
  }

  //Al contrario que la anterior, si no puede cargar la página por 
  //un error de conexión, habrá un botón que te dejara intentarlo de nuevo.
  if (error) {
    return (
      <div className="centro-pantalla error-mensaje">
        <h2>Error de Conexión</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Reintentar</button>
      </div>
    );
  }

  return (
    <main className="app">
      <h1>Personajes relevantes de Canarias</h1>
      
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Buscar personaje..." 
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)} 
        />
      </div>

      <section className="cards-container">
        {personajesFiltrados.map((personaje) => (
          <Card
            key={personaje.id}
            nombre={personaje.nombre}
            profesion={personaje.profesion}
            foto={personaje.foto}
            onVerDetalles={() => setSeleccionado(personaje)} 
          />
        ))}
       
        {seleccionado && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>{seleccionado.nombre}</h2>
              <p>{seleccionado.biografia}</p>
              <button onClick={() => setSeleccionado(null)} className="btn-cerrar">Cerrar</button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;