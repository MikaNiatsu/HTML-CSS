import { useState } from "react";
import { AlertCircle } from "lucide-react";

const htmlExercises = [
  {
    id: 1,
    title: "Estructura básica HTML",
    description:
      "Toda página HTML debe tener una estructura básica con las etiquetas <!DOCTYPE html>, <html>, <head>, y <body>.",
    task: "Crea la estructura básica de una página HTML con un título 'Mi primera página' en la etiqueta <title>.",
    initialCode: "<!-- Escribe tu código aquí -->",
    solution: `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <title>Mi primera página</title>
  </head>
  <body>
  </body>
  </html>`,
  },
  {
    id: 2,
    title: "Encabezados",
    description:
      "Los encabezados en HTML van desde <h1> (el más importante) hasta <h6> (el menos importante).",
    task: "Crea un encabezado de cada nivel, desde h1 hasta h6, con el texto 'Encabezado [nivel]'.",
    initialCode: "<!-- Escribe tu código aquí -->",
    solution: `<h1>Encabezado 1</h1>
  <h2>Encabezado 2</h2>
  <h3>Encabezado 3</h3>
  <h4>Encabezado 4</h4>
  <h5>Encabezado 5</h5>
  <h6>Encabezado 6</h6>`,
  },
  {
    id: 3,
    title: "Párrafos y formato de texto",
    description:
      "Los párrafos se crean con <p>. Puedes usar <strong> para negrita y <em> para cursiva.",
    task: "Crea dos párrafos. En el primero, incluye una palabra en negrita. En el segundo, una en cursiva.",
    initialCode: "<!-- Escribe tu código aquí -->",
    solution: `<p>Este es el <strong>primer</strong> párrafo.</p>
  <p>Este es el <em>segundo</em> párrafo.</p>`,
  },
  {
    id: 4,
    title: "Enlaces",
    description: "Los enlaces se crean con <a> y el atributo href.",
    task: "Crea un enlace a https://es.lipsum.com/ que diga 'Visita Ejemplo.com' y que se abra en una nueva pestaña.",
    initialCode: "<a></a>",
    solution: `<a href="https://es.lipsum.com/" target="_blank">Visita Ejemplo.com</a>`,
  },
  {
    id: 5,
    title: "Imágenes",
    description:
      "Las imágenes se insertan con <img>. Siempre incluye los atributos src y alt.",
    task: "Inserta una imagen con src='https://picsum.photos/200/300' y alt='Imagen de ejemplo'.",
    initialCode: "<img>",
    solution: `<img src="https://picsum.photos/200/300" alt="Imagen de ejemplo">`,
  },
  {
    id: 6,
    title: "Listas",
    description:
      "Hay listas ordenadas <ol> y no ordenadas <ul>. Los ítems de la lista se definen con <li>.",
    task: "Crea una lista no ordenada con tres frutas y una lista ordenada con los tres primeros planetas del sistema solar.",
    initialCode: "<!-- Escribe tu código aquí -->",
    solution: `<ul>
    <li>Manzana</li>
    <li>Banana</li>
    <li>Cereza</li>
  </ul>
  <ol>
    <li>Mercurio</li>
    <li>Venus</li>
    <li>Tierra</li>
  </ol>`,
  },
  {
    id: 7,
    title: "Tablas",
    description:
      "Las tablas se crean con <table>. Usa <tr> para filas, <th> para encabezados y <td> para celdas.",
    task: "Crea una tabla con 2 columnas y 3 filas, incluyendo una fila de encabezado.",
    initialCode: "<table></table>",
    solution: `<table>
    <tr>
      <th>Encabezado 1</th>
      <th>Encabezado 2</th>
    </tr>
    <tr>
      <td>Fila 1, Celda 1</td>
      <td>Fila 1, Celda 2</td>
    </tr>
    <tr>
      <td>Fila 2, Celda 1</td>
      <td>Fila 2, Celda 2</td>
    </tr>
  </table>`,
  },
  {
    id: 8,
    title: "Formularios",
    description:
      "Los formularios se crean con <form>. Incluyen varios tipos de inputs.",
    task: "Crea un formulario con campos para nombre (text), email (email), y un botón de envío.",
    initialCode: "<form></form>",
    solution: `<form>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <input type="submit" value="Enviar">
  </form>`,
  },
  {
    id: 9,
    title: "Divs y Spans",
    description:
      "<div> es un contenedor de bloque, mientras que <span> es un contenedor en línea.",
    task: "Crea un div con un párrafo dentro, y dentro del párrafo, usa un span para colorear una palabra de rojo.",
    initialCode: "<!-- Escribe tu código aquí -->",
    solution: `<div>
    <p>Este es un párrafo con una <span style="color: red;">palabra</span> en rojo.</p>
  </div>`,
  },
  {
    id: 10,
    title: "Semántica HTML5",
    description:
      "HTML5 introdujo etiquetas semánticas como <header>, <nav>, <main>, <article>, <aside>, y <footer>.",
    task: "Crea una estructura básica de página usando estas etiquetas semánticas.",
    initialCode: "<!-- Escribe tu código aquí -->",
    solution: `<header>
    <h1>Mi Sitio Web</h1>
  </header>
  <nav>
    <ul>
      <li><a href="#home">Inicio</a></li>
      <li><a href="#about">Acerca de</a></li>
    </ul>
  </nav>
  <main>
    <article>
      <h2>Artículo Principal</h2>
      <p>Contenido del artículo...</p>
    </article>
    <aside>
      <h3>Barra lateral</h3>
      <p>Contenido relacionado...</p>
    </aside>
  </main>
  <footer>
    <p>&copy; 2024 Mi Sitio Web</p>
  </footer>`,
  },
  {
    id: 11,
    title: "Introducción a CSS",
    description: "CSS se puede aplicar inline, en una etiqueta <style>, o en un archivo externo. Aquí usaremos estilos inline.",
    task: "Aplica un color de texto rojo y un tamaño de fuente de 20px a un párrafo.",
    initialCode: "<p>Este es un párrafo de ejemplo.</p>",
    solution: `<p style="color: red; font-size: 20px;">Este es un párrafo de ejemplo.</p>`
  },
  {
    id: 12,
    title: "Selectores CSS",
    description: "Los selectores CSS permiten aplicar estilos a elementos específicos. Pueden ser de tipo, clase o ID.",
    task: "Crea un párrafo con la clase 'destacado' y aplícale un fondo amarillo y texto en negrita usando una etiqueta <style>.",
    initialCode: `<style>
  /* Tu código CSS aquí */
</style>
<p class="destacado">Este es un párrafo destacado.</p>`,
    solution: `<style>
  .destacado {
    background-color: yellow;
    font-weight: bold;
  }
</style>
<p class="destacado">Este es un párrafo destacado.</p>`
  },
  {
    id: 13,
    title: "Modelo de caja",
    description: "Cada elemento HTML tiene un modelo de caja que incluye margen, borde, padding y el contenido.",
    task: "Crea un div con un ancho de 200px, un padding de 20px, un borde sólido negro de 2px y un margen superior de 10px.",
    initialCode: `<style>
  /* Tu código CSS aquí */
</style>
<div>Este es un div de ejemplo.</div>`,
    solution: `<style>
  div {
    width: 200px;
    padding: 20px;
    border: 2px solid black;
    margin-top: 10px;
  }
</style>
<div>Este es un div de ejemplo.</div>`
  },
  {
    id: 14,
    title: "Flexbox",
    description: "Flexbox es un método de diseño para organizar elementos en filas o columnas.",
    task: "Crea un contenedor flex con tres elementos div en su interior. Alinea los elementos horizontalmente con espacio entre ellos.",
    initialCode: `<style>
  /* Tu código CSS aquí */
</style>
<div class="contenedor">
  <div>Elemento 1</div>
  <div>Elemento 2</div>
  <div>Elemento 3</div>
</div>`,
    solution: `<style>
  .contenedor {
    display: flex;
    justify-content: space-between;
  }
  .contenedor div {
    padding: 10px;
    background-color: lightgray;
  }
</style>
<div class="contenedor">
  <div>Elemento 1</div>
  <div>Elemento 2</div>
  <div>Elemento 3</div>
</div>`
  },
  {
    id: 15,
    title: "Responsive Design",
    description: "El diseño responsive permite que las páginas web se vean bien en todos los dispositivos.",
    task: "Crea una regla de medios (media query) que cambie el color de fondo de body a azul claro cuando la pantalla sea menor a 600px.",
    initialCode: `<style>
  /* Tu código CSS aquí */
</style>
<p>Redimensiona la ventana para ver el cambio.</p>`,
    solution: `<style>
  body {
    background-color: white;
  }
  @media (max-width: 600px) {
    body {
      background-color: lightblue;
    }
  }
</style>
<p>Redimensiona la ventana para ver el cambio.</p>`
  }
];
/* eslint-disable react/prop-types */
const validateSolution = (userCode, solution, exerciseId) => {
  const normalizeHTML = (html) => {
    if (typeof html !== 'string') {
      console.error('Expected html to be a string, but got:', typeof html);
      return '';
    }
    return html.replace(/\s+/g, ' ').trim().toLowerCase();
  };

  const userNormalized = normalizeHTML(userCode);

  // Función para extraer etiquetas y atributos
  const extractTags = (code) => {
    if (typeof code !== 'string') {
      console.error('Expected code to be a string, but got:', typeof code);
      return [];
    }
    return code.match(/<[^>]+>/g) || [];
  };

  // Función para extraer reglas CSS
  const extractCSS = (code) => {
    if (typeof code !== 'string') {
      console.error('Expected code to be a string, but got:', typeof code);
      return '';
    }
    const styleMatch = code.match(/<style>([\s\S]*?)<\/style>/);
    return styleMatch ? styleMatch[1].replace(/\s+/g, ' ').trim().toLowerCase() : '';
  };

  const userTags = extractTags(userCode).map(normalizeHTML);
  const userCSS = extractCSS(userCode);

  // Validación específica para cada ejercicio
  switch (exerciseId) {
    case 1: // Estructura básica HTML
      return userTags.some(tag => tag.includes('<!doctype html>')) &&
             userTags.some(tag => tag.includes('<html')) &&
             userTags.some(tag => tag.includes('<head>')) &&
             userTags.some(tag => tag.includes('<title>')) &&
             userNormalized.includes('mi primera página') &&
             userTags.some(tag => tag.includes('<body>'));
    
    case 2: // Encabezados
      return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].every(h => 
        userTags.some(tag => tag.includes(`<${h}`)) && userNormalized.includes(`encabezado ${h.slice(1)}`)
      );
    
    case 3: // Párrafos y formato de texto
      return userTags.filter(tag => tag.includes('<p')).length >= 2 &&
             userTags.some(tag => tag.includes('<strong>')) &&
             userTags.some(tag => tag.includes('<em>'));
    
    case 4: // Enlaces
      return userTags.some(tag => 
        tag.includes('href="https://es.lipsum.com/"') && 
        tag.includes('target="_blank"')
      ) && userNormalized.includes('visita ejemplo.com');
    
    case 5: // Imágenes
      return userTags.some(tag => 
        tag.includes('src="https://picsum.photos/200/300"') && 
        tag.includes('alt="imagen de ejemplo"')
      );
    
    case 6: // Listas
      return userTags.some(tag => tag.includes('<ul>')) &&
             userTags.some(tag => tag.includes('<ol>')) &&
             userTags.filter(tag => tag.includes('<li>')).length >= 6;
    
    case 7: // Tablas
      return userTags.some(tag => tag.includes('<table>')) &&
             userTags.filter(tag => tag.includes('<tr>')).length >= 3 &&
             userTags.some(tag => tag.includes('<th>')) &&
             userTags.some(tag => tag.includes('<td>'));
    
    case 8: // Formularios
      return userTags.some(tag => tag.includes('<form>')) &&
             userTags.some(tag => tag.includes('type="text"')) &&
             userTags.some(tag => tag.includes('type="email"')) &&
             userTags.some(tag => tag.includes('type="submit"'));
    
    case 9: // Divs y Spans
      return userTags.some(tag => tag.includes('<div>')) &&
             userTags.some(tag => tag.includes('<p>')) &&
             userTags.some(tag => tag.includes('<span')) &&
             userNormalized.includes('style="color: red;"');
    
    case 10: // Semántica HTML5
      return ['header', 'nav', 'main', 'article', 'aside', 'footer'].every(tag => 
        userTags.some(t => t.includes(`<${tag}`))
      );
    
    case 11: // Introducción a CSS
      return userTags.some(tag => tag.includes('<p')) &&
             userNormalized.includes('style="color: red; font-size: 20px;"');
    
    case 12: // Selectores CSS
      return userCSS.includes('.destacado') &&
             userCSS.includes('background-color: yellow') &&
             userCSS.includes('font-weight: bold') &&
             userTags.some(tag => tag.includes('class="destacado"'));
    
    case 13: // Modelo de caja
      return userCSS.includes('width: 200px') &&
             userCSS.includes('padding: 20px') &&
             userCSS.includes('border: 2px solid black') &&
             userCSS.includes('margin-top: 10px');
    
    case 14: // Flexbox
      return userCSS.includes('display: flex') &&
             userCSS.includes('justify-content: space-between') &&
             userTags.filter(tag => tag.includes('<div>')).length >= 3;
    
    case 15: // Responsive Design
      return userCSS.includes('@media') &&
             userCSS.includes('(max-width: 600px)') &&
             userCSS.includes('background-color: lightblue');
    
    default:
      return false;
  }
};

const Exercise = ({ exercise, onSubmit }) => {
  const [code, setCode] = useState(exercise.initialCode);
  const [preview, setPreview] = useState("");
  const [feedback, setFeedback] = useState(null);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handlePreview = () => {
    const previewHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; }
          </style>
        </head>
        <body>
          ${code}
        </body>
      </html>
    `;
    setPreview(previewHTML);
  };

  const handleSubmit = () => {
    if (validateSolution(code, exercise.solution, exercise.id)) {
      setFeedback({ type: "success", message: "¡Correcto! Tu solución cumple con los criterios esperados." });
      onSubmit(exercise.id, code);
    } else {
      setFeedback({
        type: "error",
        message: "Tu solución no cumple con todos los criterios esperados. Revisa las instrucciones e intenta de nuevo.",
      });
    }
  };

  return (
    <div className="border rounded-lg p-4 mb-4 shadow-md">
      <h2 className="text-xl font-bold mb-2">{exercise.title}</h2>
      <p className="mb-2 text-gray-600">{exercise.description}</p>
      <p className="font-semibold mb-2 text-blue-600">Tarea: {exercise.task}</p>
      <textarea
        className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="4"
        value={code}
        onChange={handleCodeChange}
      />
      <div className="flex space-x-2 mb-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          onClick={handlePreview}
        >
          Vista previa
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
          onClick={handleSubmit}
        >
          Enviar
        </button>
      </div>
      {preview && (
        <div className="border p-2 mb-2 bg-gray-100 rounded">
          <strong className="block mb-1">Vista previa:</strong>
          <iframe
            srcDoc={preview}
            className="w-full h-40 border-0"
            title="Preview"
          />
        </div>
      )}
      {feedback && (
        <div
          className={`bg-${
            feedback.type === "success" ? "green-100" : "red-100"
          } p-2 rounded flex items-center`}
        >
          <AlertCircle className="h-4 w-4 mr-2" />
          <span className="font-semibold">{feedback.message}</span>
        </div>
      )}
    </div>
  );
};

const ComponentExercises = () => {
  const handleSubmit = (exerciseId, code) => {
    console.log(`Ejercicio ${exerciseId} completado. Código:`, code);
  };

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Práctica de HTML y CSS
      </h1>
      {htmlExercises.map((exercise) => (
        <Exercise
          key={exercise.id}
          exercise={exercise}
          onSubmit={handleSubmit}
        />
      ))}
    </div>
  );
};

export default ComponentExercises;