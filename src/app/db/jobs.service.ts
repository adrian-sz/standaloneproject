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
      name: 'Warrior',
      role: 'Tank',
      strength: 2000,
      dexterity: 1000,
      vitality: 2000,
      intelligence: 300,
      mind: 300,
      piety: 300,
      photo: 'https://static.wikia.nocookie.net/ffxiv_gamepedia/images/9/97/Warrior.png'
    },
    {
      id: 1,
      name: 'Whitemage',
      role: 'Healer',
      strength: 500,
      dexterity: 1000,
      vitality: 1000,
      intelligence: 2000,
      mind: 2000,
      piety: 2000,
      photo: 'https://static.wikia.nocookie.net/ffxiv_gamepedia/images/e/e7/White_Mage.png'
    },
    {
      id: 2,
      name: 'Ninja',
      role: 'Melee dps',
      strength: 2000,
      dexterity: 2000,
      vitality: 1000,
      intelligence: 500,
      mind: 500,
      piety: 500,
      photo: 'https://static.wikia.nocookie.net/ffxiv_gamepedia/images/2/21/Ninja.png'
    },
    {
      id: 3,
      name: 'Dancer',
      role: 'Ranged dps',
      strength: 2000,
      dexterity: 2000,
      vitality: 1000,
      intelligence: 500,
      mind: 500,
      piety: 500,
      photo: 'https://static.wikia.nocookie.net/ffxiv_gamepedia/images/4/41/Dancer.png'
    },
  ]

  getJobs() : Jobs[] {
    return this.jobsList
  }

  //constructor() { }
}
