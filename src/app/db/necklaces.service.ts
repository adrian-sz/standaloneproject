import { Injectable } from '@angular/core';
import { Necklaces } from './necklaces';

@Injectable({
  providedIn: 'root'
})
export class NecklacesService {

  necklacesList: Necklaces[] = [
    { 
      id: 8000,
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
        id: 8001,
        name: 'Ascension Necklace of Fending',
        slot: 'Necklace',
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
        tenacity: 102,
        piety: 0,
        skillspeed: 0,
        spellspeed: 0,
        photo: 'https://ffxiv.gamerescape.com/w/images/0/0c/Ascension_Necklace_of_Fending_Icon.png'
        },
  ]

  getNecklaces() : Necklaces[] {
    return this.necklacesList
  }
  
}
