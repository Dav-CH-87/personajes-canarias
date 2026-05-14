/**
 * Componente Card para mostrar la información de cada personaje.
 * Este componente recibe las propiedades 'nombre', 'profesion', 'foto' y 'onVerDetalles' 
 * para mostrar la información del personaje y manejar la acción de ver detalles.
 */
interface CardProps {
  nombre: string;
  profesion: string;
  foto: string;
  onVerDetalles: () => void;
}

/**
 * El componente Card es una función que recibe las propiedades definidas en la interfaz CardProps.
 * Renderiza una tarjeta con la foto del personaje, su nombre, profesión y un botón para ver detalles.
 * El botón 'Ver detalles' ejecuta la función 'onVerDetalles' cuando se hace click, 
 * lo que permite mostrar información adicional del personaje en un modal o sección aparte.
 */
function Card({ nombre, profesion, foto, onVerDetalles }: CardProps) {
  return (
    <article className="card">
      <img src={foto} alt={nombre} className="card-image" />
      <div className="card-content">
        <h2>{nombre}</h2>
        <p>{profesion}</p>
        <button onClick={onVerDetalles} className="btn-detalles">Ver detalles</button>
      </div>
    </article>
  );
}

export default Card;
