import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* eslint-disable react/prop-types */
const Slide = ({ children, isActive }) => (
  <div
    className={`h-full w-full ${
      isActive ? "block" : "hidden"
    } p-8 overflow-y-auto`}
  >
    {children}
  </div>
);

// Componente para el código
const CodeBlock = ({ children }) => (
  <>
    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
      <code>{children}</code>
    </pre>
    <br />
    <Result>{children}</Result>
  </> 
);

const CssCodeBlock = ({ children }) => (
  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
    <code>{children}</code>
  </pre>
);

const Result = ({ children }) => (
  <div className="bg-blue-600 text-white p-4 rounded-lg overflow-x-auto ">
    <div dangerouslySetInnerHTML={{ __html: children }} />
  </div>
);

// Componente para la lista de elementos
const ListItem = ({ children }) => <li className="mb-2">{children}</li>;

// Componentes para cada diapositiva individual
const WelcomeSlide = () => (
  <div>
    <h1 className="text-5xl font-bold mb-6 text-blue-600">Bienvenida</h1>
    <p className="text-2xl mb-4 text-gray-700">
      Bienvenidos a esta presentación sobre HTML y CSS, donde
      aprenderemos los conceptos básicos con ejemplos claros.
    </p>
    <p className="text-2xl text-gray-700">
      Vamos a comenzar con la introducción.
    </p>
  </div>
);

const WhatIsHTMLSlide = () => (
  <div>
    <h1 className="text-5xl font-bold mb-6 text-blue-600">¿Qué es HTML?</h1>
    <p className="text-2xl mb-4 text-gray-700">
      HTML, que significa HyperText Markup Language (Lenguaje de Marcado de
      Hipertexto), es el lenguaje estándar que se utiliza para crear y diseñar
      páginas web.
    </p>
    <p className="text-2xl mb-4 text-gray-700">
      Es la columna vertebral de todas las páginas web y permite estructurar el
      contenido de manera que sea fácil de leer y navegar.
    </p>
    <p className="text-2xl text-gray-700">
      Ejemplo de una etiqueta HTML básica:
    </p>
    <CodeBlock>{"<p>Este es un párrafo en HTML</p>"}</CodeBlock>
  </div>
);

const HTMLStructureSlide = () => (
  <div>
    <h1 className="text-5xl font-bold mb-6 text-blue-600">
      Estructura Básica de un Documento HTML
    </h1>
    <p className="text-2xl mb-4 text-gray-700">
      Todo documento HTML tiene una estructura básica que incluye las siguientes
      etiquetas:
    </p>
    <CodeBlock>
      {`<!DOCTYPE html>
<html>
<head>
    <title>Mi Primera Página Web</title>
</head>
<body>
    <h1>¡Hola, Mundo!</h1>
    <p>Este es mi primer párrafo en HTML.</p>
</body>
</html>`}
    </CodeBlock>
  </div>
);

const HTMLTagsExplanationSlide = () => (
  <div>
    <h1 className="text-5xl font-bold mb-6 text-blue-600">
      Explicación de las Etiquetas HTML
    </h1>
    <ul className="list-disc pl-5 text-2xl text-gray-700">
      <ListItem>
        <strong>&lt;!DOCTYPE html&gt;</strong>: Declara el tipo de documento y
        la versión de HTML.
      </ListItem>
      <ListItem>
        <strong>&lt;html&gt;</strong>: La etiqueta raíz que envuelve todo el
        contenido de la página.
      </ListItem>
      <ListItem>
        <strong>&lt;head&gt;</strong>: Contiene meta-información sobre el
        documento (como el título).
      </ListItem>
      <ListItem>
        <strong>&lt;title&gt;</strong>: Define el título de la página que
        aparece en la pestaña del navegador.
      </ListItem>
      <ListItem>
        <strong>&lt;body&gt;</strong>: Contiene el contenido visible de la
        página, como textos, imágenes y enlaces.
      </ListItem>
      <ListItem>
        <strong>&lt;h1&gt;</strong>: Define un encabezado principal.
      </ListItem>
      <ListItem>
        <strong>&lt;p&gt;</strong>: Define un párrafo.
      </ListItem>
    </ul>
  </div>
);

const CommonHTMLElementsSlide = () => (
  <div>
    <h1 className="text-5xl font-bold mb-6 text-blue-600">
      Elementos Comunes en HTML
    </h1>
    <ul className="list-disc pl-5 text-2xl text-gray-700">
      <ListItem>
        <strong>Encabezados</strong> (&lt;h1&gt; a &lt;h6&gt;): Utilizados para
        definir títulos y subtítulos.
        <CodeBlock>{"<h1>Título Principal</h1>\n<h2>Subtítulo</h2>"}</CodeBlock>
      </ListItem>
      <ListItem>
        <strong>Párrafos</strong> (&lt;p&gt;): Para añadir bloques de texto.
        <CodeBlock>{"<p>Este es un párrafo de ejemplo.</p>"}</CodeBlock>
      </ListItem>
      <ListItem>
        <strong>Enlaces</strong> (&lt;a&gt;): Para crear hipervínculos a otras
        páginas.
        <CodeBlock>
          {'<a href="https://www.ejemplo.com">Visita Ejemplo.com</a>'}
        </CodeBlock>
      </ListItem>
      <ListItem>
        <strong>Listas</strong>: Ordenadas (&lt;ol&gt;) y desordenadas
        (&lt;ul&gt;).
        <CodeBlock>
          {`<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
</ul>`}
        </CodeBlock>
      </ListItem>
      <ListItem>
        <strong>Imágenes</strong> (&lt;img&gt;): Para mostrar imágenes.
        <CodeBlock>
          {'<img src="/public/imagen.jpg" alt="Descripción de la imagen" width="300" >'}
        </CodeBlock>
      </ListItem>
    </ul>
  </div>
);

const IntroToCSSSlide = () => (
  <div>
    <h1 className="text-5xl font-bold mb-6 text-blue-600">
      Introducción a CSS
    </h1>
    <p className="text-2xl mb-4 text-gray-700">
      CSS (Cascading Style Sheets) es un lenguaje de diseño gráfico que se
      utiliza para definir y crear la presentación de un documento estructurado
      escrito en HTML.
    </p>
    <p className="text-2xl mb-4 text-gray-700">
      CSS se puede aplicar de tres maneras:
    </p>
    <ul className="list-disc pl-5 text-2xl text-gray-700">
      <ListItem>
        Inline (dentro de las etiquetas HTML)
        <CssCodeBlock>
          {'<p style="color: red;">Texto en rojo</p>'}
        </CssCodeBlock>
      </ListItem>
      <ListItem>
        Interno (usando la etiqueta &lt;style&gt; en el &lt;head&gt;)
        <CssCodeBlock>
          {`<style>
  p { color: blue; }
</style>`}
        </CssCodeBlock>
      </ListItem>
      <ListItem>
        Externo (en un archivo .css separado)
        <CssCodeBlock>
          {'<link rel="stylesheet" href="estilos.css">'}
        </CssCodeBlock>
      </ListItem>
    </ul>
  </div>
);

const CSSSelectorsSlide = () => (
  <div>
    <h1 className="text-5xl font-bold mb-6 text-blue-600">Selectores CSS</h1>
    <p className="text-2xl mb-4 text-gray-700">
      Los selectores CSS nos permiten aplicar estilos a elementos específicos en
      nuestro HTML.
    </p>
    <ul className="list-disc pl-5 text-2xl text-gray-700">
      <ListItem>
        <strong>Selector de elemento</strong>: Aplica estilos a todos los
        elementos de un tipo.
        <CssCodeBlock>{"p { color: blue; }"}</CssCodeBlock>
      </ListItem>
      <ListItem>
        <strong>Selector de clase</strong>: Aplica estilos a elementos con una
        clase específica.
        <CssCodeBlock>{".destacado { font-weight: bold; }"}</CssCodeBlock>
      </ListItem>
      <ListItem>
        <strong>Selector de ID</strong>: Aplica estilos a un elemento con un ID
        específico.
        <CssCodeBlock>{"#header { background-color: gray; }"}</CssCodeBlock>
      </ListItem>
    </ul>
  </div>
);

const CSSBoxModelSlide = () => (
  <div>
    <h1 className="text-5xl font-bold mb-6 text-blue-600">
      Modelo de Caja en CSS
    </h1>
    <p className="text-2xl mb-4 text-gray-700">
      El modelo de caja es un concepto fundamental en CSS que describe cómo se
      renderiza cada elemento HTML.
    </p>
    <p className="text-2xl mb-4 text-gray-700">Consiste en:</p>
    <ul className="list-disc pl-5 text-2xl text-gray-700">
      <ListItem>
        <strong>Content</strong>: El contenido del elemento
      </ListItem>
      <ListItem>
        <strong>Padding</strong>: Espacio entre el contenido y el borde
      </ListItem>
      <ListItem>
        <strong>Border</strong>: El borde que rodea el padding y el contenido
      </ListItem>
      <ListItem>
        <strong>Margin</strong>: Espacio fuera del borde
      </ListItem>
    </ul>
    <CssCodeBlock>
      {`.box {
  width: 200px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
}`}
    </CssCodeBlock>
  </div>
);

const CSSLayoutSlide = () => (
  <div>
    <h1 className="text-5xl font-bold mb-6 text-blue-600">Diseño con CSS</h1>
    <p className="text-2xl mb-4 text-gray-700">
      CSS ofrece varias técnicas para crear diseños complejos:
    </p>
    <ul className="list-disc pl-5 text-2xl text-gray-700">
      <ListItem>
        <strong>Flexbox</strong>: Para diseños unidimensionales (filas o
        columnas).
        <CssCodeBlock>
          {`.container {
  display: flex;
  justify-content: space-between;
}`}
        </CssCodeBlock>
      </ListItem>
      <ListItem>
        <strong>Grid</strong>: Para diseños bidimensionales (filas y columnas).
        <CssCodeBlock>
          {`.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}`}
        </CssCodeBlock>
      </ListItem>
    </ul>
  </div>
);

const ResponsiveDesignSlide = () => (
  <div>
    <h1 className="text-5xl font-bold mb-6 text-blue-600">Diseño Responsivo</h1>
    <p className="text-2xl mb-4 text-gray-700">
      El diseño responsivo permite que las páginas web se adapten a diferentes
      tamaños de pantalla.
    </p>
    <p className="text-2xl mb-4 text-gray-700">
      Se logra principalmente mediante el uso de media queries:
    </p>
    <CssCodeBlock>
      {`@media (max-width: 600px) {
  body {
    font-size: 14px;
  }
}`}
    </CssCodeBlock>
    <p className="mt-4 text-2xl text-gray-700">
      Este código cambia el tamaño de fuente cuando la pantalla es menor a 600px
      de ancho.
    </p>
  </div>
);

const ConclusionSlide = () => (
  <div>
    <h1 className="text-5xl font-bold mb-6 text-blue-600">Conclusión</h1>
    <p className="text-2xl mb-4 text-gray-700">
      HTML proporciona la estructura básica de las páginas web, mientras que CSS
      se encarga de su presentación y diseño.
    </p>
    <p className="text-2xl mb-4 text-gray-700">
      Juntos, HTML y CSS forman la base del desarrollo web front-end.
    </p>
    <p className="text-2xl text-gray-700">
      Con estos conocimientos básicos, estás listo para empezar a crear tus
      propias páginas web atractivas y funcionales.
    </p>
  </div>
);

// Componente principal de la aplicación
export default function SlideComponent({ onStateChange }) {
  const [isEnd, setIsActive] = useState(false);
  const toggleState = () => {
    const newState = !isEnd;
    setIsActive(newState);
    onStateChange(newState);
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    <WelcomeSlide key="welcome" />,
    <WhatIsHTMLSlide key="what-is-html" />,
    <HTMLStructureSlide key="html-structure" />,
    <HTMLTagsExplanationSlide key="html-tags" />,
    <CommonHTMLElementsSlide key="common-html" />,
    <IntroToCSSSlide key="intro-css" />,
    <CSSSelectorsSlide key="css-selectors" />,
    <CSSBoxModelSlide key="css-box-model" />,
    <CSSLayoutSlide key="css-layout" />,
    <ResponsiveDesignSlide key="responsive-design" />,
    <ConclusionSlide key="conclusion" />,
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-cyan-200 via-blue-500 to-white-500">
      {currentSlide > 0 && currentSlide < slides.length - 1 && (
        <button
          onClick={prevSlide}
          className="p-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200 mb-4"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      <div className="bg-white rounded-lg shadow-lg p-8 w-3/4 h-3/4 overflow-y-auto">
        {slides.map((slide, index) => (
          <Slide key={index} isActive={index === currentSlide}>
            {slide}
          </Slide>
        ))}
      </div>

      {currentSlide < slides.length - 1 && (
        <button
          onClick={nextSlide}
          className="p-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200 mt-4"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {currentSlide === slides.length - 1 && (
        <footer className="fixed bottom-0 left-0 right-0 text-center text-gray-500 text-sm p-4 bg-white border-t border-gray-300">
          <button
            onClick={toggleState}
            className="bg-blue-500 text-white rounded px-4 py-2"
          >
            Comenzar Ejercicios
          </button>
        </footer>
      )}
    </div>
  );
}
