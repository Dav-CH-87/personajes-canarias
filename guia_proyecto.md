## NIVEL 1 Tarjetas con React y TypeScript

Primero dentro del proyecto, en la carpeta src cree las carpetas components y data donde iran los componentes y el archivo JSON que vaya creando durante la práctica. 


- **Creación del json:**

Crearemos un archivo JSON dentro de la carpeta data que llevará de nombre data.json, dentro del archivo crearemos una lista de objetos donde meteremos a nuestros personajes canarios en el que primeramente tendrán en este apartado un id (identificador), un nombre, profesion y una foto, crearemos un total de 5 personajes canarios en esta lista.


- **Creación del componente:**

Dentro de components crearemos el archivo Card.txs, y crearemos una interfaz de nombre CardProps y contendrá nombre, profesion y foto (Todas de tipo String). Luego creamos una función llamada Card donde nos devolverá mostraremos la información básica del mismo, el nombre, la profesión y la foto y al lado referenciamos a la interfaz.


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


## NIVEL 3 Interactividad del proyecto


