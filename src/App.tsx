/**
 * Los imports necesarios para el funcionamiento de la aplicación, 
 * incluyendo React, estilos y componentes personalizados.
 */

import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import personajes from './data/data.json';

/**
 * Definición de la interfaz Personaje para tipar los datos de los personajes 
 * que se mostrarán en la aplicación. Cada personaje tiene un id, nombre, profesión, foto y biografía.
 */

interface Personaje {
  id: number;
  nombre: string;
  profesion: string;
  foto: string;
  biografia: string;
}

/**
 * Componente principal de la aplicación que muestra una lista de personajes relevantes de Canarias.
 * Permite buscar personajes por nombre y ver detalles adicionales en un modal.
 */

function App() {

  /**
   * Estados para manejar la búsqueda de personajes y el personaje seleccionado para mostrar detalles.
   * 'busqueda': Almacena el texto ingresado en el campo de búsqueda.
   * 'seleccionado': Almacena el personaje actualmente seleccionado para mostrar su biografía en un modal.
   */
  const [busqueda, setBusqueda] = useState('');
  const [seleccionado, setSeleccionado] = useState<Personaje | null>(null);

  /**
   * Filtra la lista de personajes según el texto ingresado en el campo de búsqueda.
   * La función 'filter' recorre el array de personajes y devuelve solo aquellos cuyo 
   * nombre incluye el texto de búsqueda, ignorando mayúsculas y minúsculas.
   * 'toLowerCase()' se utiliza para convertir tanto el nombre del personaje 
   * como el texto de búsqueda a minúsculas, asegurando una comparación insensible a mayúsculas.
   */
  const personajesFiltrados = personajes.filter(p => 
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  /**
   * Renderizado del componente principal. Se muestra un título, 
   * un campo de búsqueda y una lista de tarjetas.
   */

  return (
    <main className="app">
      <h1>Personajes relevantes de Canarias</h1>
      
      {/* Campo de búsqueda para filtrar personajes por nombre. 
      El valor del campo está vinculado al estado 'busqueda', 
      y se actualiza cada vez que el usuario escribe algo. */}
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Buscar personaje..." 
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)} // Actualiza el estado al escribir
        />
      </div>

      {/** Lista de tarjetas de personajes filtrados. */}
      <section className="cards-container">
        {personajesFiltrados.map((personaje: Personaje) => (
          <Card
            key={personaje.id}
            nombre={personaje.nombre}
            profesion={personaje.profesion}
            foto={personaje.foto}
            onVerDetalles={() => setSeleccionado(personaje)} 
          />
        ))}
        {/*Al hacer clic en "Ver detalles", se actualiza el estado 'seleccionado' con el personaje 
        correspondiente, lo que hace que se muestre el modal con la biografía del personaje.*/}

        {/** Este es modal para mostrar la biografía del personaje seleccionado.
         * El modal solo se muestra si hay un personaje seleccionado (es decir, si 'seleccionado' no es null).
         * Dentro del modal, se muestra el nombre y la biografía del personaje, 
         * junto con un botón para cerrar el modal, que establece 'seleccionado' a null.*/}
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

