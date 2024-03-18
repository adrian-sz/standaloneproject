import { Injectable } from '@angular/core';
import { Races } from './races';

@Injectable({
  providedIn: 'root'
})
export class RacesService {

  racesList: Races[] = [
    {
      id: -1,
      name: '',
      strength: 0,
      dexterity: 0,
      vitality: 0,
      intelligence: 0,
      mind: 0
    },
    {
      id: 0,
      name: 'Midlander',
      strength: 22,
      dexterity: 19,
      vitality: 20,
      intelligence: 23,
      mind: 19
    },
    {
      id: 1,
      name: 'Highlander',
      strength: 23,
      dexterity: 20,
      vitality: 22,
      intelligence: 18,
      mind: 20
    },
  ]

  getRaces() : Races[] {
    return this.racesList
  }

}
