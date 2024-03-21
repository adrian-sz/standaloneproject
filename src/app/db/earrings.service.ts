import { Injectable } from '@angular/core';
import { Earrings } from './earrings';

@Injectable({
  providedIn: 'root'
})
export class EarringsService {

  earringsList: Earrings[] = [
    { 
      id: 7000,
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
        id: 7001,
        name: 'Ascension Earring of Fending',
        slot: 'Earring',
        strength: 196,
        dexterity: 0,
        vitality: 218,
        intelligence: 0,
        mind: 0,
        criticalhit: 0,
        determination: 145,
        directhit: 0,
        defense: 1,
        magicdefense: 1,
        tenacity: 102,
        piety: 0,
        skillspeed: 0,
        spellspeed: 0,
        photo: 'https://ffxiv.gamerescape.com/w/images/7/7f/Ascension_Earring_of_Fending_Icon.png'
        },
  ]

  getEarrings() : Earrings[] {
    return this.earringsList
  }
}
