import { Component, Input, Output, } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 14000
  };

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  constructor(private dbzService: DbzService) { }

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    //console.log(this.nuevo);
    //this.onNuevoPersonaje.emit(this.nuevo);

    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }
}