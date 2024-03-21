import { Injectable } from '@angular/core';
import { Hands } from './hands';

@Injectable({
  providedIn: 'root'
})

export class HandsService {

  handsList: Hands[] = [
    { 
      id: 4000,
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
      id: 4001,
      name: 'Ascension Gauntlets of Fending',
      slot: 'Hand',
      strength: 248,
      dexterity: 0,
      vitality: 277,
      intelligence: 0,
      mind: 0,
      criticalhit: 184,
      determination: 0,
      directhit: 0,
      defense: 892,
      magicdefense: 892,
      tenacity: 129,
      piety: 0,
      skillspeed: 0,
      spellspeed: 0,
      photo: 'https://ffxiv.gamerescape.com/w/images/a/ae/Ascension_Gauntlets_of_Fending_Icon.png'
      },
  ]

    getHands() : Hands[] {
      return this.handsList
    }
}
