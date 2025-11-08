import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  setDoc,
} from '@angular/fire/firestore';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

export interface RegistroCurso {
  uid: string;       // UID del usuario
  cursoId: string;   // ID o título del curso
  fechaCurso: string; // Fecha específica del curso seleccionada
  registradoEn: string; // Fecha de inscripción
}

@Injectable({
  providedIn: 'root',
})
export class RegistersService {
  public notyf = new Notyf();

  constructor(private firestore: Firestore) {}

  // 🔹 Registrar usuario en un curso en una fecha específica
  async registerCurso(uid: string, cursoId: string, fechaCurso: string) {
    try {
      // Verificar si ya existe el registro para este curso y fecha
      const existente = await this.getRegistro(uid, cursoId, fechaCurso);
      if (existente) {
        this.notyf.error('Ya estás inscrito en este curso para esta fecha');
        return false;
      }

      const data: RegistroCurso = {
        uid,
        cursoId,
        fechaCurso,
        registradoEn: new Date().toISOString(),
      };

      await addDoc(collection(this.firestore, 'registros'), data);
      this.notyf.success('Registro en curso realizado correctamente');
      return true;
    } catch (error: any) {
      console.error('Error al registrar curso:', error);
      this.notyf.error('No se pudo registrar el curso');
      return false;
    }
  }

  // 🔹 Obtener todos los cursos y fechas en los que está inscrito un usuario
  async getCursosUsuario(uid: string) {
    try {
      const colRef = collection(this.firestore, 'registros');
      const q = query(colRef, where('uid', '==', uid));
      const snapshot = await getDocs(q);
      return snapshot.docs.map((doc) => doc.data() as RegistroCurso);
    } catch (error: any) {
      console.error('Error al obtener cursos del usuario:', error);
      this.notyf.error('No se pudieron obtener los cursos');
      return [];
    }
  }

  // 🔹 Obtener todos los usuarios inscritos en un curso específico y fecha
  async getUsuariosPorCurso(cursoId: string, fechaCurso?: string) {
    try {
      const colRef = collection(this.firestore, 'registros');
      let q;
      if (fechaCurso) {
        q = query(
          colRef,
          where('cursoId', '==', cursoId),
          where('fechaCurso', '==', fechaCurso)
        );
      } else {
        q = query(colRef, where('cursoId', '==', cursoId));
      }
      const snapshot = await getDocs(q);
      return snapshot.docs.map((doc) => doc.data() as RegistroCurso);
    } catch (error: any) {
      console.error('Error al obtener usuarios del curso:', error);
      this.notyf.error('No se pudieron obtener los registros');
      return [];
    }
  }

  // 🔹 Obtener un registro específico de un usuario en un curso y fecha
  async getRegistro(uid: string, cursoId: string, fechaCurso: string) {
    try {
      const colRef = collection(this.firestore, 'registros');
      const q = query(
        colRef,
        where('uid', '==', uid),
        where('cursoId', '==', cursoId),
        where('fechaCurso', '==', fechaCurso)
      );
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        return snapshot.docs[0].data() as RegistroCurso;
      }
      return null;
    } catch (error: any) {
      console.error('Error al consultar registro:', error);
      return null;
    }
  }

  // 🔹 Crear cursos dinámicos con varias fechas
  async addCurso(cursoId: string, nombre: string, fechas: string[]) {
    try {
      await setDoc(doc(this.firestore, `cursos/${cursoId}`), {
        nombre,
        fechas,
      });
      this.notyf.success('Curso creado correctamente');
      return true;
    } catch (error: any) {
      console.error('Error al crear curso:', error);
      this.notyf.error('No se pudo crear el curso');
      return false;
    }
  }

  // 🔹 Obtener todos los cursos con sus fechas
  async getCursos() {
    try {
      const colRef = collection(this.firestore, 'cursos');
      const snapshot = await getDocs(colRef);
      return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error: any) {
      console.error('Error al obtener cursos:', error);
      this.notyf.error('No se pudieron obtener los cursos');
      return [];
    }
  }
}
