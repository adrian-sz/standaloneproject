import { Injectable } from '@angular/core';
import { Bodies } from './bodies';

@Injectable({
  providedIn: 'root'
})
export class BodiesService {

  bodiesList: Bodies[] = [
    { 
      id: 3000,
      name: '',
      slot: '',
      strength: 0,
      dexterity: 0,
      vitality: 0,
      intelligence: 0,
      mind: 0,
      criticalhit: 0,
      determination: 0,
      directhit: 0,
      defense: 0,
      magicdefense: 0,
      tenacity: 0,
      piety: 0,
      skillspeed: 0,
      spellspeed: 0,
      photo: 'null'
      },
      { 
        id: 3001,
        name: 'Augmented Diadochos Coat of Healing ',
        slot: 'Head',
        strength: 0,
        dexterity: 0,
        vitality: 372,
        intelligence: 0,
        mind: 374,
        criticalhit: 200,
        determination: 286,
        directhit: 0,
        defense: 468,
        magicdefense: 820,
        tenacity: 0,
        piety: 0,
        skillspeed: 0,
        spellspeed: 0,
        photo: 'https://ffxiv.gamerescape.com/w/images/2/2e/Augmented_Diadochos_Coat_of_Healing_Icon.png'
        },
  ]

    getBodies() : Bodies[] {
      return this.bodiesList
    }
}
