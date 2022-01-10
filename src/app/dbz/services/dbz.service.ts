import { Injectable } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Krilin',
      poder: 7000
    },
    {
      nombre: 'Goku',
      poder: 37000
    },
    {
      nombre: 'Vegeta',
      poder: 27000
    },
    {
      nombre: 'Picoro',
      poder: 17000
    },
    {
      nombre: 'Trunks',
      poder: 14000
    },
  ];

  get personajes(): Personaje[] {
    return [... this._personajes];
  }

  constructor() { }

  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
