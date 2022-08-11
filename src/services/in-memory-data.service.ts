import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../components/heroes/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Mr. Nice' },
      { id: 13, name: 'Narco' },
      { id: 14, name: 'Bombasto' },
      { id: 15, name: 'Celeritas' },
      { id: 16, name: 'Magneta' },
      { id: 17, name: 'RubberMan' },
      { id: 18, name: 'Dynama' },
      { id: 19, name: 'Dr IQ' },
      { id: 20, name: 'Magma' },
      { id: 21, name: 'Tornado' },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }

  constructor() {}
}
