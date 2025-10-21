import { Curso } from "../interfaces/data.interfas";

// 2. Crear un array con varios cursos
export const cursos: Curso[] = [
  {
    titulo: "Introducción a las IAs",
    descripcion: "Aprende los conceptos básicos de la inteligencia artificial, sus aplicaciones y cómo está transformando diversas industrias.",
    fecha: "2025-11-05",
    subcursos: [
      "Tipos y variables",
      "Interfaces y clases",
      "Genéricos",
      "Configuración del compilador"
    ],
    imagenPath: "images/ia.png"
  },
  {
    titulo: "Introducción a Excel",
    descripcion: "Domina las funciones y herramientas esenciales de Excel para análisis de datos y gestión de hojas de cálculo.",
    fecha: "2025-12-01",
    subcursos: [
      "Componentes y props",
      "Estado y efectos",
      "Routing con React Router",
      "Integración con APIs"
    ],
    imagenPath: "images/excel.jpg"
  }
];


