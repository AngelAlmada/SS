import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../../../interfaces/data.interfas';
import { cursos } from '../../../data/data';
@Injectable({
  providedIn: 'root'
})
export class ObtenerDatos {
  

  constructor() {}

  obtenerDatos(): Curso[] {
    return cursos;
  }

  obtenerPorTitulo(titulo: string): Curso | undefined {
    return cursos.find(curso => curso.titulo === titulo);
  }
}
