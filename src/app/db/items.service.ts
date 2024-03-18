import { Injectable } from '@angular/core';
import { Items } from './items';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ItemsService {

  itemsList: Items[] = [
    {
      id: 1000,
    name: 'Augmented Diadochos War Axe',
    slot: 'Weapon',
    strength: 349,
    dexterity: 0,
    vitality: 385,
    intelligence: 0,
    mind: 0,
    criticalhit: 187,
    determination: 267,
    directhit: 0,
    defense: 0,
    magicdefense: 0,
    tenacity: 0,
    piety: 0,
    skillspeed: 0,
    spellspeed: 0,
    photo: 'https://ffxiv.gamerescape.com/w/images/f/f2/Augmented_Diadochos_War_Axe_Icon.png'
    },
    {
      id: 1001,
    name: 'Augmented Diadochos Greatsword',
    slot: 'Weapon',
    strength: 349,
    dexterity: 0,
    vitality: 385,
    intelligence: 0,
    mind: 0,
    criticalhit: 187,
    determination: 267,
    directhit: 0,
    defense: 0,
    magicdefense: 0,
    tenacity: 0,
    piety: 0,
    skillspeed: 0,
    spellspeed: 0,
    photo: 'https://ffxiv.gamerescape.com/w/images/9/93/Augmented_Diadochos_Greatsword_Icon.png'
    },
    {
      id: 1002,
    name: 'Augmented Diadochos War Axe',
    slot: 'Weapon',
    strength: 349,
    dexterity: 0,
    vitality: 385,
    intelligence: 0,
    mind: 0,
    criticalhit: 187,
    determination: 267,
    directhit: 0,
    defense: 0,
    magicdefense: 0,
    tenacity: 0,
    piety: 0,
    skillspeed: 0,
    spellspeed: 0,
    photo: 'https://ffxiv.consolegameswiki.com/mediawiki/images/7/7c/Augmented_diadochos_war_axe_icon1.png'
    },
    {
      id: 1003,
    name: 'Augmented Diadochos War Axe',
    slot: 'Weapon',
    strength: 349,
    dexterity: 0,
    vitality: 385,
    intelligence: 0,
    mind: 0,
    criticalhit: 187,
    determination: 267,
    directhit: 0,
    defense: 0,
    magicdefense: 0,
    tenacity: 0,
    piety: 0,
    skillspeed: 0,
    spellspeed: 0,
    photo: 'https://ffxiv.consolegameswiki.com/mediawiki/images/7/7c/Augmented_diadochos_war_axe_icon1.png'
    },
  ]

  getItems() : Items[] {
    return this.itemsList
  }
}