import { Injectable } from '@angular/core';
import { Rings } from './rings';

@Injectable({
  providedIn: 'root'
})
export class RingsService {

  ringsList: Rings[] = [
    { 
      id: 10000,
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
      photo: ''
      },
      { 
        id: 10001,
        name: 'Ascension Ring of Fending',
        slot: 'Ring',
        strength: 196,
        dexterity: 0,
        vitality: 218,
        intelligence: 0,
        mind: 0,
        criticalhit: 145,
        determination: 102,
        directhit: 0,
        defense: 1,
        magicdefense: 1,
        tenacity: 0,
        piety: 0,
        skillspeed: 0,
        spellspeed: 0,
        photo: 'https://ffxiv.gamerescape.com/w/images/6/65/Ascension_Ring_of_Fending_Icon.png'
        },
  ]

  getRings() : Rings[] {
    return this.ringsList
  }
  
}
