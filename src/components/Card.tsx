interface CardProps {
  nombre: string;
  profesion: string;
  foto: string;
  onVerDetalles: () => void;
}

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
