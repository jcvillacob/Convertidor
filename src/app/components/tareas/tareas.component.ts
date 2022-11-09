import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent implements OnInit {
  listTareas: Tarea[] = [];
  nombreTarea = '';

  constructor() {}

  ngOnInit(): void {}

  agregarTarea() {
    // Crear un objeto tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false,
    };

    // Agregar el objeto Tarea al array
    this.listTareas.push(tarea);

    // Resetear el formulario
    this.nombreTarea = '';
  }

  eliminarTarea(i: number): void {
    this.listTareas.splice(i, 1);
  }

  actualizarTarea(tarea: Tarea, i: number) {
    this.listTareas[i].estado = !tarea.estado;
  }
}
