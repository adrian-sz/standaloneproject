import { Injectable } from '@angular/core';
import { Jobs } from './jobs';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class JobsService {

  jobsList: Jobs[] = [
    {
      id: 0,
      name: 'warrior',
      role: 'tank',
      strength: 2000,
      dexterity: 1000,
      vitality: 2000,
      intelligence: 300,
      mind: 300,
      piety: 300
    },
    {
      id: 1,
      name: 'whitemage',
      role: 'healer',
      strength: 500,
      dexterity: 1000,
      vitality: 1000,
      intelligence: 2000,
      mind: 2000,
      piety: 2000
    },
    {
      id: 2,
      name: 'ninja',
      role: 'meleedps',
      strength: 2000,
      dexterity: 2000,
      vitality: 1000,
      intelligence: 500,
      mind: 500,
      piety: 500
    },
    {
      id: 3,
      name: 'dancer',
      role: 'rangeddps',
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
