import { useState, useEffect } from 'react';
import personajesLocales from '../data/data.json';
import { obtenerDatosWikipedia } from '../services/Api';

// Definimos la forma de un personaje en nuestra app 
interface Personaje {
  id: number;
  nombre: string;
  profesion: string;
  foto: string;
  biografia: string;
}

/**
 * Hook para gestionar el estado de los personajes, la búsqueda, la selección y el control de carga/error.
 * Toda la lógica de negocio relacionada con los personajes se mantiene aquí.
 */
export function usePersonajes() {
  const [personajes, setPersonajes] = useState<Personaje[]>([]);
  const [cargando, setCargando] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [busqueda, setBusqueda] = useState<string>('');
  const [seleccionado, setSeleccionado] = useState<Personaje | null>(null);

  /**
   * useEffect para cargar los datos de Wikipedia al montar el componente.
   * Aquí es donde hacemos la llamada a la API y gestionamos el estado de carga y error.
   */
  useEffect(() => {
    async function cargarTodosLosPersonajes() {
      try {
        setCargando(true);
        const promesas = personajesLocales.map(async (p) => {
          const datosWiki = await obtenerDatosWikipedia(p.nombre);
          return {
            id: p.id,
            nombre: datosWiki.nombre,
            profesion: p.profesion, 
            foto: datosWiki.foto,
            biografia: datosWiki.profesion 
          };
        });

      /**
       * Promise.all() espera a que todas las promesas se resuelvan y 
       * devuelve un array con los resultados reales.
       */
        const resultadosReales = await Promise.all(promesas);
        setPersonajes(resultadosReales);
      } catch (err: any) {
        setError(err.message || 'Ocurrió un error al conectar con Wikipedia');
      } finally {
        setCargando(false);
      }
    }

    cargarTodosLosPersonajes();
  }, []);

  // Lógica de filtrado que estaba en App pero que pasamos aquí para mantener una estructura más ordenada.
  const personajesFiltrados = personajes.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Exponemos todo lo que la app necesita para funcionar, manteniendo la lógica de negocio aquí dentro
  return {
    personajesFiltrados,
    cargando,
    error,
    busqueda,
    setBusqueda,
    seleccionado,
    setSeleccionado,
  };
}