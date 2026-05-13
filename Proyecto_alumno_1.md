# Plan de Prácticas: 

Plan para aprender a desarrollar aplicaciones reales utilizando las tecnologías más demandadas del mercado: **React, TypeScript y Spring Boot**.

Tu objetivo será construir una **"Enciclopedia Inteligente de Personajes Canarios"** (Formato wikipedia). Que eventualmente se integrará en el sistema principal.

---

## El Camino del Desarrollador (Roadmap)

Este plan se divide en 4 niveles de dificultad. No pases al siguiente hasta que el anterior funcione perfectamente.

### Nivel 1: El "Esqueleto" (Frontend Estático)
**Objetivo:** Aprender a maquetar con React y TypeScript sin depender de datos externos.

- [ ] **Tarea 1:** Crear un componente `Card` que muestre la foto, nombre y profesión de un personaje.
- [ ] **Tarea 2:** Crear un archivo llamado `data.json` con 5 personajes relevantes de Canarias (ej: Benito Pérez Galdós, César Manrique).
- [ ] **Tarea 3:** Usar `.map()` en React para listar todas las tarjetas usando los datos del JSON.

> **💡 Conceptos clave:** JSX, Props, Interfaces de TypeScript, Listas y Keys.

---

### Nivel 2: "Cerebro" y Estado (React Hooks)
**Objetivo:** Hacer que la aplicación sea interactiva.

- [ ] **Tarea 1:** Añadir un buscador (input) para filtrar personajes por nombre.
- [ ] **Tarea 2:** Implementar un botón de "Ver detalles" que al hacer clic abra un modal o cambie la vista con la biografía completa.
- [ ] **Tarea 3:** Controlar qué personaje está seleccionado usando el estado de React.

> **💡 Conceptos clave:** `useState`, Manejo de eventos, Filtrado de arrays.

---

### Nivel 3: Conexión con el Mundo Real (APIs)
**Objetivo:** Dejar de usar el archivo local y traer datos de internet.

- [ ] **Tarea 1:** Investigar la **API de Wikipedia** (MediaWiki).
- [ ] **Tarea 2:** Sustituir tus datos locales por una llamada `fetch` a la API de Wikipedia para traer el resumen biográfico real de los personajes.
- [ ] **Tarea 3:** Gestionar los estados de "Cargando..." y "Error" si la conexión falla.

> **💡 Conceptos clave:** `useEffect`, Promesas, Fetch/Axios, Ciclo de vida del componente.

---

### Nivel 4: Persistencia y Backend (Spring Boot)
**Objetivo:** Crear tu propia base de datos para guardar personajes favoritos o notas.

- [ ] **Tarea 1:** Crear un proyecto Spring Boot con dependencias.
- [ ] **Tarea 2:** Crear la entidad `Personaje` y un `Repository`.
- [ ] **Tarea 3:** Crear un `RestController` con un endpoint `GET /api/personajes` que devuelva tu propia lista desde la base de datos.
- [ ] **Tarea 4:** Conectar tu React con tu propio Backend.

> **💡 Conceptos clave:** Spring Annotations, REST API, Inyección de dependencias, CORS.

---

## Herramientas de Trabajo

| Herramienta | Uso |
| :--- | :--- |
| **VS Code / Antigravity** | Tu editor de código principal. |
| **DevTools (F12)** | Para depurar errores en el navegador. |
| **Postman / Insomnia** | Para probar tus rutas del Backend. |
| **Git** | Para subir tus avances (hacer commits frecuentes). |

---

## Reglas de Oro contra la "Parálisis por IA"

Sabemos que ChatGPT y Copilot son útiles, pero para que realmente aprendas, debes seguir estas reglas:

1. **Entiende cada línea:** Si copias un bloque de código, debes ser capaz de explicar qué hace cada función.
2. **Escribe, no solo pegues:** Intenta escribir el código a mano para ganar "memoria muscular".
3. **Pregunta el "Por qué":** Si la IA te da una solución, pregúntale: *"¿Por qué has usado un `useEffect` aquí y no otra cosa?"*.
4. **Falla mucho:** Es mejor que el código falle y encuentres el error, a que funcione a la primera sin saber por qué.

---

## Recursos Útiles para Canarias
- [Datos Abiertos del Gobierno de Canarias](https://datos.canarias.es/catalogos/general/)
- [CanariWiki](https://www3.gobiernodecanarias.org/medusa/wiki/index.php?title=P%C3%A1gina_principal)
- [API de Wikipedia (Sandbox)](https://en.wikipedia.org/wiki/Special:ApiSandbox)
