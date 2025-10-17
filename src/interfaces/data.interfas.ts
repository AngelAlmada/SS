export interface Curso {
  titulo: string;
  descripcion: string;
  fecha: string; // o Date si quieres manejar objetos de fecha
  subcursos: string[]; // lista de temas o módulos
  imagenPath: string;  // ruta o URL de la imagen
}
