import { Injectable } from '@angular/core';
import { Heads } from './heads';

@Injectable({
  providedIn: 'root'
})

export class HeadsService {

  headsList: Heads[] = [
    { 
      id: 2000,
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
        id: 2001,
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
        photo: 'https://ffxiv.gamerescape.com/w/images/7/7c/Augmented_Credendum_Circlet_of_Healing_Icon.png'
        },
        { 
        id: 2002,
        name: 'Augmented Diadochos Beret of Healing',
        slot: 'Head',
        strength: 0,
        dexterity: 0,
        vitality: 234,
        intelligence: 0,
        mind: 235,
        criticalhit: 126,
        determination: 184,
        directhit: 0,
        defense: 349,
        magicdefense: 611,
        tenacity: 0,
        piety: 180,
        skillspeed: 0,
        spellspeed: 0,
        photo: 'https://ffxiv.gamerescape.com/w/images/c/c1/Augmented_Diadochos_Beret_of_Healing_Icon.png'
        },
  ]

    getHeads() : Heads[] {
      return this.headsList
    }
}
