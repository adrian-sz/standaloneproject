import { Injectable } from '@angular/core';
import { Legs } from './legs';

@Injectable({
  providedIn: 'root'
})
export class LegsService {

  legsList: Legs[] = [
    { 
      id: 5000,
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
      id: 5001,
      name: 'Ascension Hose of Fending',
      slot: 'Legs',
      strength: 394,
      dexterity: 0,
      vitality: 440,
      intelligence: 0,
      mind: 0,
      criticalhit: 204,
      determination: 292,
      directhit: 0,
      defense: 1196,
      magicdefense: 1196,
      tenacity: 129,
      piety: 0,
      skillspeed: 0,
      spellspeed: 0,
      photo: 'https://ffxiv.gamerescape.com/w/images/b/ba/Ascension_Hose_of_Fending_Icon.png'
      },
  ]

    getLegs() : Legs[] {
      return this.legsList
    }
}
