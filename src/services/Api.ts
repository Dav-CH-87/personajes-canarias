// Definimos qué forma tiene la respuesta que nos da Wikipedia (TypeScript)
interface WikipediaResponse {
  titles: {
    normalized: string;
  };
  extract: string;
  thumbnail?: {
    source: string;
  };
}

// Esta función recibe el nombre de un personaje y busca su biografía real
export async function obtenerDatosWikipedia(nombrePersonaje: string) {
  // Reemplazamos los espacios por guiones bajos (ej: "César Manrique" -> "César_Manrique")
  const nombreFormateado = encodeURIComponent(nombrePersonaje.replace(/ /g, '_'));
  const url = `https://es.wikipedia.org/api/rest_v1/page/summary/${nombreFormateado}`;

  // fetch() inicia la petición a internet (esto es una Promesa)
  const respuesta = await fetch(url);

  // Si la página no existe en Wikipedia, lanzamos un error
  if (!respuesta.ok) {
    throw new Error(`No se encontró a ${nombrePersonaje} en Wikipedia`);
  }

  // Convertimos la respuesta cruda de internet en un objeto JavaScript
  const datos: WikipediaResponse = await respuesta.json();

  // Devolvemos los datos limpios adaptados a lo que nuestra app necesita
  return {
    nombre: datos.titles.normalized,
    profesion: datos.extract, //El resumen de wikipedia como profesion
    foto: datos.thumbnail?.source || "https://via.placeholder.com/150" // Foto por defecto si no tiene
  };
}