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
    name: '',
    slot: '',
    damage: 0,
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
      id: 1001,
    name: 'Augmented Diadochos Greatsword',
    slot: 'Weapon',
    damage: 0,
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
    damage: 0,
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
    name: 'Mandervillous Cane',
    slot: 'Weapon',
    damage: 132,
    strength: 0,
    dexterity: 0,
    vitality: 412,
    intelligence: 0,
    mind: 416,
    criticalhit: 306,
    determination: 306,
    directhit: 0,
    defense: 0,
    magicdefense: 0,
    tenacity: 0,
    piety: 0,
    skillspeed: 0,
    spellspeed: 72,
    photo: 'https://ffxiv.gamerescape.com/w/images/6/6d/Mandervillous_Cane_Icon.png'
    },
    {
      id: 1004,
    name: 'Voidvessel Cane',
    slot: 'Weapon',
    damage: 130,
    strength: 0,
    dexterity: 0,
    vitality: 398,
    intelligence: 0,
    mind: 399,
    criticalhit: 300,
    determination: 210,
    directhit: 0,
    defense: 0,
    magicdefense: 0,
    tenacity: 0,
    piety: 0,
    skillspeed: 0,
    spellspeed: 0,
    photo: 'https://ffxiv.gamerescape.com/w/images/3/3c/Voidvessel_Cane_Icon.png'
    },
    {
      id: 1005,
    name: 'Augmented Diadochos Cane',
    slot: 'Weapon',
    damage: 129,
    strength: 0,
    dexterity: 0,
    vitality: 385,
    intelligence: 0,
    mind: 388,
    criticalhit: 208,
    determination: 297,
    directhit: 0,
    defense: 0,
    magicdefense: 0,
    tenacity: 0,
    piety: 0,
    skillspeed: 0,
    spellspeed: 0,
    photo: 'https://ffxiv.gamerescape.com/w/images/c/c7/Augmented_Diadochos_Cane_Icon.png'
    },
  ]

  getItems() : Items[] {
    return this.itemsList
  }
}