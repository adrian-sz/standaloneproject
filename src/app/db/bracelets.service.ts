import { Injectable } from '@angular/core';
import { Bracelets } from './bracelets';

@Injectable({
  providedIn: 'root'
})
export class BraceletsService {
  braceletsList: Bracelets[] = [
    { 
      id: 9000,
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
      id: 9001,
      name: 'Ascension Bracelet of Fending',
      slot: 'Bracelet',
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
      tenacity: 0,
      piety: 0,
      skillspeed: 102,
      spellspeed: 0,
      photo: 'https://ffxiv.gamerescape.com/w/images/d/dd/Ascension_Bracelet_of_Fending_Icon.png'
      },
  ]

    getBracelets() : Bracelets[] {
      return this.braceletsList
    }
  
}
