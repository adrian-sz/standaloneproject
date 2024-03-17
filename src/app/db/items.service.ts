import { Injectable } from '@angular/core';
import { Items } from './items';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ItemsService {

  jobsList: Items[] = [
    {
      id: 100,
      name: 'Steel Dagger',
      slot: 'weapon',
      strength: 222,
      dexterity: 444,
      vitality: 0,
      intelligence: 0,
      mind: 0,
      piety: 0
    },
    {
      id: 101,
      name: 'Oak helmet',
      slot: 'head',
      strength: 0,
      dexterity: 0,
      vitality: 222,
      intelligence: 0,
      mind: 0,
      piety: 0
    },
    {
      id: 102,
      name: 'Leather gloves',
      slot: 'hand',
      strength: 0,
      dexterity: 50,
      vitality: 100,
      intelligence: 0,
      mind: 0,
      piety: 0
    },
    {
      id: 103,
      name: 'Cotton robes',
      slot: 'body',
      strength: 0,
      dexterity: 0,
      vitality: 100,
      intelligence: 100,
      mind: 300,
      piety: 300
    },
  ]

  constructor() { }
}
