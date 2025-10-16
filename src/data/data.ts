interface Curso {
  titulo: string;
  descripcion: string;
  fecha: string; // o Date si quieres manejar objetos de fecha
  subcursos: string[]; // lista de temas o módulos
  imagenPath: string;  // ruta o URL de la imagen
}

// 2. Crear un array con varios cursos
const cursos: Curso[] = [
  {
    titulo: "Introducción a TypeScript",
    descripcion: "Aprende los fundamentos del lenguaje TypeScript y cómo usarlo con proyectos de JavaScript.",
    fecha: "2025-11-05",
    subcursos: [
      "Tipos y variables",
      "Interfaces y clases",
      "Genéricos",
      "Configuración del compilador"
    ],
    imagenPath: "/images/ts-course.jpg"
  },
  {
    titulo: "Desarrollo Web con React",
    descripcion: "Construye aplicaciones modernas usando React, Hooks y componentes funcionales.",
    fecha: "2025-12-01",
    subcursos: [
      "Componentes y props",
      "Estado y efectos",
      "Routing con React Router",
      "Integración con APIs"
    ],
    imagenPath: "/images/react-course.jpg"
  }
];


