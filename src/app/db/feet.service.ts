import { Injectable } from '@angular/core';
import { Feet } from './feet';

@Injectable({
  providedIn: 'root'
})
export class FeetService {

  feetList: Feet[] = [
    { 
      id: 6000,
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
        id: 6001,
        name: 'Ascension Sollerets of Fending',
        slot: 'Feet',
        strength: 248,
        dexterity: 0,
        vitality: 277,
        intelligence: 0,
        mind: 0,
        criticalhit: 0,
        determination: 129,
        directhit: 0,
        defense: 892,
        magicdefense: 892,
        tenacity: 0,
        piety: 0,
        skillspeed: 184,
        spellspeed: 0,
        photo: 'https://ffxiv.gamerescape.com/w/images/f/fb/Ascension_Sollerets_of_Fending_Icon.png'
        },
  ]

  getFeet() : Feet[] {
    return this.feetList
  }
}
