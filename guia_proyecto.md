# Creado por David Castellano Hernández: Proyecto Wikipedia-Canarios

Proyecto sobre una wikipedia de 5 famosos personajes canarios

## NIVEL 1 Tarjetas con React y TypeScript

Primero dentro del proyecto, en la carpeta src cree las carpetas components y data donde iran los componentes y el archivo JSON que vaya creando durante la práctica. 


- **Creación del json:**

Crearemos un archivo JSON dentro de la carpeta data que llevará de nombre data.json, dentro del archivo crearemos una lista de objetos donde meteremos a nuestros personajes canarios en el que primeramente tendrán en este apartado un id (identificador), un nombre, profesion y una foto, crearemos un total de 5 personajes canarios en esta lista.

```json

[
  {
    "id": 1,
    "nombre": "Benito Pérez Galdós",
    "profesion": "Escritor",
    "foto": "/benito.png",
  },
  {
    "id": 2,
    "nombre": "César Manrique",
    "profesion": "Artista y arquitecto",
    "foto": "/cesar.png",
  },
  {
    "id": 3,
    "nombre": "Alfredo Kraus",
    "profesion": "Tenor",
    "foto": "/Alfredo.png",
  },
  {
    "id": 4,
    "nombre": "Josefina de la Torre",
    "profesion": "Poeta, novelista y actriz",
    "foto": "/Josefina.png",
  },
  {
    "id": 5,
    "nombre": "Óscar Domínguez",
    "profesion": "Pintor surrealista",
    "foto": "/Oscar.png",
  }
]

```

- **Creación del componente:**

Dentro de components crearemos el archivo Card.txs, y crearemos una interfaz de nombre CardProps y contendrá nombre, profesion y foto (Todas de tipo String). Luego creamos una función llamada Card donde nos devolverá mostraremos la información básica del mismo, el nombre, la profesión y la foto y al lado referenciamos a la interfaz.

```ts

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

```

- **Uso del componente Card en App.tsx:**

Pasaremos a App.tsx para representar los componentes en la aplicación
primero importamos el css de App, luego haremos lo mismo con Card.tsx desde components y le daremos un nombre de referencia que es Card, lo mismo haremos con el json.

Creamos una interfaz llamada personaje que representará el id (de tipo number), nombre, profesion y foto (las tres de tipo String).

Luego en la función App creamos un main llamado app donde meteremos el contenido (esto dentro del return), creamos un titulo y luego un section que lo que hará gracias con el map es recorrer todo el array de personaje que es nuestro json y con el `<Card />` renderizamos la carta.

## NIVEL 2 Interactividad del proyecto

- **Tarea 1: El buscador**

Primero importamos el useState arriba para que "recuerde la aplicación" que cuando por ejemplo ponemos benito en el buscador, aparezca la card de benito solamente al buscar.

Ahora definimos el estado del buscador mediante una variable constante (const) que tendrá dentro dos valores, 'busqueda' que es el valor actual y setBusqueda que es la función para cambiarlo. Además, creamos otra variable constante, personajesFiltrados, que filtra los personajes por su nombre y que los reconozca en minúscula, aparte de que incluya el valor de búsqueda en minúsculas.

Dentro del return creamos otro div con className search-container y dentro un input donde aparecerá la barra de búsqueda. En dicho input pondremos que el valor sea busqueda y que con el `onChange` actualice el estado al escribir.

Por último, en donde antes mapeabamos ahora pondremos que mapee Los personajes filtrados (personajesFiltrados).


- **Tarea 2 y 3: Botón de Ver detalles y selección**

Primero iremos Card.tsx para modificar algunos aspectos del código. En la interfaz ponemos `onVerDetalles: () => void` que nos servirá como aviso,luego en los parámetros insertamos el onVerDetalles y dentro de la función añadimos un botón que al hacer click en Ver Detalles active la acción.

En App.tsx, definimos otro estado que será seleccionado y setSeleccionado al igual que antes pero que este estado hace que el personaje empiece con null (es decir que nada esta seleccionado).

En donde se encuentra el container de card pondremos en Card onVerDetalles para que lo renderize en la página y que además al hacer click en la misma, se actualice el estado "seleccionado" con el personaje correspondiente.

Luego, volveremos al data.json para añadir una nueva sección llamada biografía que albergará la información correspondiente del personaje al que se refiera.

Por otro lado crearemos un modal (una pequeña ventana en la que aparecerá información más detalla del personaje). este modal lo que hace es mostrar la información del respectivo personaje que se seleccione al darle a ver detalles. Además dentro del modal crearemos un botón de cerrar para que cuando termines de leer la información puedas quitar la ventanita que emergió.

Por último en el apartado css añadiremos sus respectivos estilos a todos los nuevos añadidos en el código en este apartado.



## NIVEL 3 Conexión con la API de Wikipedia y Limpieza de Código (Hooks)

- **Tarea 1: El archivo de servicio (Api.ts)**

Para no mezclar el código de la interfaz con las consultas a internet, creamos una carpeta independiente llamada services y dentro un archivo Api.ts. Este archivo se encarga exclusivamente de hablar con los servidores de Wikipedia.

Creamos una función asíncrona (async/await) que recibe el nombre del personaje. Como Wikipedia no entiende los nombres con espacios en sus enlaces, usamos un pequeño truco de texto (replace(/ /g, '_')) para cambiar los espacios por guiones bajos, y encodeURIComponent por si el nombre lleva tildes o caracteres especiales.

Hacemos la petición con un fetch a la API de Wikipedia. Para evitar que la aplicación entera se rompa si un personaje no tiene foto en internet, usamos un "escudo de seguridad" (?.), que básicamente dice: Si hay foto, dámela; si no, pon una imagen gris por defecto. Al final, esta función devuelve un objeto limpio con el nombre real, la foto y un extracto de texto que usaremos como biografía.

- **Tarea 2: El Custom Hook (usePersonajes.ts)**

Como el archivo App.tsx se estaba empezando a llenar de demasiadas líneas de código pesadas, decidimos crear un "Hook personalizado" dentro de una nueva carpeta llamada hooks. Esto nos sirve para mudar allí todos los useState, los efectos y las funciones de filtrado, dejando el archivo principal totalmente limpio.

Dentro de usePersonajes.ts, metemos tres estados nuevos para controlar la API de internet: personajes (donde se guardarán los datos reales), cargando (para saber si la web está descargando la info) y error (por si falla internet). También mudamos aquí los estados que ya teníamos del Nivel 2: el de la busqueda y el del personaje seleccionado.

Para activar la descarga, usamos un useEffect con un array vacío [] al final. Esto le dice a React que active la búsqueda en Wikipedia solo una vez, justo cuando el usuario abre la página por primera vez, evitando que la web entre en un bucle infinito de peticiones. La función mapea nuestro JSON local, lanza las 5 peticiones a Wikipedia a la vez usando Promise.all para ir súper rápido, y guarda el resultado final. Al terminar el archivo, la función expone (devuelve) solo las variables y funciones que la aplicación necesita para pintar la pantalla.

- **Tarea 3: Limpieza en App.tsx y Renderizado Condicional**

Gracias a que movimos toda la lógica pesada al Hook, nuestro App.tsx se reduce drásticamente. Ahora solo importamos usePersonajes y, mediante una sola línea de código (desestructuración con llaves {}), extraemos las herramientas listas para usar. El archivo ya no crea variables ni hace filtros; solo lee el paquete que le llega del Hook.

Antes de pintar las tarjetas, añadimos dos "pantallas de control" (renderizado condicional). Si el estado cargando es verdadero, la aplicación se detiene ahí y muestra un mensaje en pantalla avisando al usuario. Si el estado error se activa por un fallo de conexión, muestra un botón para reintentar.

Si todo va bien, la aplicación sigue hacia abajo y renderiza el HTML que ya teníamos: el buscador (conectado a busqueda y setBusqueda), las tarjetas (mapeando personajesFiltrados) y el modal, con la gran mejora de que ahora la biografía y las fotos se actualizan en tiempo real con datos reales de internet en vez de estar escritas a mano en el JSON local.

- **Añadidos en el CSS**

Por último, para que las nuevas pantallas luzcan profesionales, añadimos unas clases específicas al final de nuestro archivo App.css. Creamos un contenedor llamado .centro-pantalla para que el texto de carga o error aparezca perfectamente alineado en mitad del monitor.

Además, diseñamos un elemento visual llamado .cargador utilizando bordes redondeados y una animación infinita de rotación (@keyframes girar) para crear un círculo giratorio (spinner) moderno. Para que todo el diseño mantenga la misma estética que ya teníamos, enlazamos el color de este cargador y del botón de error con nuestro color verde corporativo (#3ee5a5).

