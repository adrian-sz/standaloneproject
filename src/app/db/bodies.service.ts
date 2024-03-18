import { Injectable } from '@angular/core';
import { Bodies } from './bodies';

@Injectable({
  providedIn: 'root'
})
export class BodiesService {

  bodiesList: Bodies[] = [
    { 
      id: 2000,
      name: 'Augmented Credendum Circlet of Healing',
      slot: 'Head',
      strength: 0,
      dexterity: 0,
      vitality: 249,
      intelligence: 0,
      mind: 248,
      criticalhit: 129,
      determination: 184,
      directhit: 0,
      defense: 357,
      magicdefense: 624,
      tenacity: 0,
      piety: 0,
      skillspeed: 0,
      spellspeed: 0,
      photo: 'null'
      }, 
  ]

    getBodies() : Bodies[] {
      return this.bodiesList
    }
}
