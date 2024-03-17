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
      name: 'warrior',
      slot: 'tank',
      strength: 2000,
      dexterity: 1000,
      vitality: 2000,
      intelligence: 300,
      mind: 300,
      piety: 300
    },
    {
      id: 101,
      name: 'whitemage',
      slot: 'healer',
      strength: 500,
      dexterity: 1000,
      vitality: 1000,
      intelligence: 2000,
      mind: 2000,
      piety: 2000
    },
    {
      id: 102,
      name: 'ninja',
      slot: 'meleedps',
      strength: 2000,
      dexterity: 2000,
      vitality: 1000,
      intelligence: 500,
      mind: 500,
      piety: 500
    },
    {
      id: 103,
      name: 'dancer',
      slot: 'rangeddps',
      strength: 2000,
      dexterity: 2000,
      vitality: 1000,
      intelligence: 500,
      mind: 500,
      piety: 500
    },
  ]

  constructor() { }
}
