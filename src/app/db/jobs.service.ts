import { Injectable } from '@angular/core';
import { Jobs } from './jobs';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class JobsService {

  jobsList: Jobs[] = [
    {
      id: -1,
      name: '',
      role: '',
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
      mainstat: '',
      photo: ''
    },
    {
      id: 0,
      name: 'Paladin',
      role: 'Tank',
      damage: 0,
      strength: 390,
      dexterity: 373,
      vitality: 429,
      intelligence: 233,
      mind: 389,
      criticalhit: 400,
      determination: 390,
      directhit: 400,
      defense: 0,
      magicdefense: 0,
      tenacity: 400,
      piety: 390,
      skillspeed: 400,
      spellspeed: 400,
      mainstat: 'Strength',
      photo: 'https://static.wikia.nocookie.net/ffxiv_gamepedia/images/b/b2/Paladin.png'
    },
    {
      id: 1,
      name: 'Warrior',
      role: 'Tank',
      damage: 0,
      strength: 409,
      dexterity: 373,
      vitality: 429,
      intelligence: 155,
      mind: 213,
      criticalhit: 400,
      determination: 390,
      directhit: 400,
      defense: 0,
      magicdefense: 0,
      tenacity: 400,
      piety: 390,
      skillspeed: 400,
      spellspeed: 400,
      mainstat: 'Strength',
      photo: 'https://static.wikia.nocookie.net/ffxiv_gamepedia/images/9/97/Warrior.png'
    },
    {
      id: 2,
      name: 'Dark Knight',
      role: 'Tank',
      damage: 0,
      strength: 409,
      dexterity: 373,
      vitality: 429,
      intelligence: 233,
      mind: 155,
      criticalhit: 400,
      determination: 390,
      directhit: 400,
      defense: 0,
      magicdefense: 0,
      tenacity: 400,
      piety: 390,
      skillspeed: 400,
      spellspeed: 400,
      mainstat: 'Strength',
      photo: 'https://static.wikia.nocookie.net/ffxiv_gamepedia/images/6/69/Dark_Knight.png'
    },
    {
      id: 3,
      name: 'Gunbreaker',
      role: 'Tank',
      damage: 0,
      strength: 390,
      dexterity: 373,
      vitality: 429,
      intelligence: 233,
      mind: 389,
      criticalhit: 400,
      determination: 390,
      directhit: 400,
      defense: 0,
      magicdefense: 0,
      tenacity: 400,
      piety: 390,
      skillspeed: 400,
      spellspeed: 400,
      mainstat: 'Strength',
      photo: 'https://static.wikia.nocookie.net/ffxiv_gamepedia/images/3/31/Gunbreaker.png'
    },
    {
      id: 4,
      name: 'White Mage',
      role: 'Healer',
      damage: 0,
      strength: 216,
      dexterity: 412,
      vitality: 390,
      intelligence: 408,
      mind: 448,
      criticalhit: 400,
      determination: 390,
      directhit: 400,
      defense: 0,
      magicdefense: 0,
      tenacity: 400,
      piety: 390,
      skillspeed: 400,
      spellspeed: 400,
      mainstat: 'Mind',
      photo: 'https://static.wikia.nocookie.net/ffxiv_gamepedia/images/e/e7/White_Mage.png'
    },
    {
      id: 5,
      name: 'Scholar',
      role: 'Healer',
      damage: 0,
      strength: 353,
      dexterity: 393,
      vitality: 390,
      intelligence: 408,
      mind: 448,
      criticalhit: 400,
      determination: 390,
      directhit: 400,
      defense: 0,
      magicdefense: 0,
      tenacity: 400,
      piety: 390,
      skillspeed: 400,
      spellspeed: 400,
      mainstat: 'Mind',
      photo: 'https://static.wikia.nocookie.net/ffxiv_gamepedia/images/c/c5/Scholar.png'
    },
    {
      id: 6,
      name: 'Astrologian',
      role: 'Healer',
      damage: 0,
      strength: 197,
      dexterity: 393,
      vitality: 390,
      intelligence: 408,
      mind: 448,
      criticalhit: 400,
      determination: 390,
      directhit: 400,
      defense: 0,
      magicdefense: 0,
      tenacity: 400,
      piety: 390,
      skillspeed: 400,
      spellspeed: 400,
      mainstat: 'Mind',
      photo: 'https://static.wikia.nocookie.net/ffxiv_gamepedia/images/3/32/Astrologian.png'
    },
    {
      id: 7,
      name: 'Sage',
      role: 'Healer',
      damage: 0,
      strength: 236,
      dexterity: 393,
      vitality: 390,
      intelligence: 447,
      mind: 448,
      criticalhit: 400,
      determination: 390,
      directhit: 400,
      defense: 0,
      magicdefense: 0,
      tenacity: 400,
      piety: 390,
      skillspeed: 400,
      spellspeed: 400,
      mainstat: 'Mind',
      photo: 'https://www.gamespot.com/a/uploads/original/1599/15997278/3862299-sageff14.png'
    },
    {
      id: 8,
      name: 'Monk',
      role: 'Melee dps',
      damage: 0,
      strength: 429,
      dexterity: 412,
      vitality: 390,
      intelligence: 194,
      mind: 350,
      criticalhit: 400,
      determination: 390,
      directhit: 400,
      defense: 0,
      magicdefense: 0,
      tenacity: 400,
      piety: 390,
      skillspeed: 400,
      spellspeed: 400,
      mainstat: 'Strength',
      photo: 'https://static.wikia.nocookie.net/ffxiv_gamepedia/images/4/44/Monk.png'
    },
    {
      id: 9,
      name: 'Dragoon',
      role: 'Melee dps',
      damage: 0,
      strength: 448,
      dexterity: 412,
      vitality: 409,
      intelligence: 174,
      mind: 252,
      criticalhit: 400,
      determination: 390,
      directhit: 400,
      defense: 0,
      magicdefense: 0,
      tenacity: 400,
      piety: 390,
      skillspeed: 400,
      spellspeed: 400,
      mainstat: 'Strength',
      photo: 'https://static.wikia.nocookie.net/ffxiv_gamepedia/images/c/c7/Dragoon.png'
    },
    {
      id: 10,
      name: 'Ninja',
      role: 'Melee dps',
      damage: 0,
      strength: 333,
      dexterity: 429,
      vitality: 390,
      intelligence: 252,
      mind: 291,
      criticalhit: 400,
      determination: 390,
      directhit: 400,
      defense: 0,
      magicdefense: 0,
      tenacity: 400,
      piety: 390,
      skillspeed: 400,
      spellspeed: 400,
      mainstat: 'Dexterity',
      photo: 'https://static.wikia.nocookie.net/ffxiv_gamepedia/images/2/21/Ninja.png'
    },
    {
      id: 11,
      name: 'Samurai',
      role: 'Melee dps',
      damage: 0,
      strength: 436,
      dexterity: 424,
      vitality: 390,
      intelligence: 233,
      mind: 194,
      criticalhit: 400,
      determination: 390,
      directhit: 400,
      defense: 0,
      magicdefense: 0,
      tenacity: 400,
      piety: 390,
      skillspeed: 400,
      spellspeed: 400,
      mainstat: 'Strength',
      photo: 'https://static.wikia.nocookie.net/ffxiv_gamepedia/images/0/09/Samurai.png'
    },
    {
      id: 12,
      name: 'Reaper',
      role: 'Melee dps',
      damage: 0,
      strength: 448,
      dexterity: 393,
      vitality: 409,
      intelligence: 311,
      mind: 155,
      criticalhit: 400,
      determination: 390,
      directhit: 400,
      defense: 0,
      magicdefense: 0,
      tenacity: 400,
      piety: 390,
      skillspeed: 400,
      spellspeed: 400,
      mainstat: 'Strength',
      photo: 'https://pbs.twimg.com/media/E6B4ptyWYAALJkC.png'
    },
    {
      id: 13,
      name: 'Bard',
      role: 'Ranged dps',
      damage: 0,
      strength: 333,
      dexterity: 448,
      vitality: 390,
      intelligence: 311,
      mind: 291,
      criticalhit: 400,
      determination: 390,
      directhit: 400,
      defense: 0,
      magicdefense: 0,
      tenacity: 400,
      piety: 390,
      skillspeed: 400,
      spellspeed: 400,
      mainstat: 'Dexterity',
      photo: 'https://static.wikia.nocookie.net/ffxiv_gamepedia/images/8/82/Bard.png'
    },
    {
      id: 14,
      name: 'Machinist',
      role: 'Ranged dps',
      damage: 0,
      strength: 333,
      dexterity: 448,
      vitality: 390,
      intelligence: 311,
      mind: 330,
      criticalhit: 400,
      determination: 390,
      directhit: 400,
      defense: 0,
      magicdefense: 0,
      tenacity: 400,
      piety: 390,
      skillspeed: 400,
      spellspeed: 400,
      mainstat: 'Dexterity',
      photo: 'https://static.wikia.nocookie.net/ffxiv_gamepedia/images/e/e0/Machinist.png'
    },
    {
      id: 15,
      name: 'Dancer',
      role: 'Ranged dps',
      damage: 0,
      strength: 353,
      dexterity: 448,
      vitality: 390,
      intelligence: 330,
      mind: 311,
      criticalhit: 400,
      determination: 390,
      directhit: 400,
      defense: 0,
      magicdefense: 0,
      tenacity: 400,
      piety: 390,
      skillspeed: 400,
      spellspeed: 400,
      mainstat: 'Dexterity',
      photo: 'https://static.wikia.nocookie.net/ffxiv_gamepedia/images/4/41/Dancer.png'
    },
    {
      id: 16,
      name: 'Black Mage',
      role: 'Magic dps',
      damage: 0,
      strength: 158,
      dexterity: 373,
      vitality: 390,
      intelligence: 448,
      mind: 311,
      criticalhit: 400,
      determination: 390,
      directhit: 400,
      defense: 0,
      magicdefense: 0,
      tenacity: 400,
      piety: 390,
      skillspeed: 400,
      spellspeed: 400,
      mainstat: 'Intelligence',
      photo: 'https://static.wikia.nocookie.net/ffxiv_gamepedia/images/4/4e/Black_Mage.png'
    },
    {
      id: 17,
      name: 'Summoner',
      role: 'Magic dps',
      damage: 0,
      strength: 333,
      dexterity: 373,
      vitality: 390,
      intelligence: 448,
      mind: 291,
      criticalhit: 400,
      determination: 390,
      directhit: 400,
      defense: 0,
      magicdefense: 0,
      tenacity: 400,
      piety: 390,
      skillspeed: 400,
      spellspeed: 400,
      mainstat: 'Intelligence',
      photo: 'https://static.wikia.nocookie.net/ffxiv_gamepedia/images/2/2f/Summoner.png'
    },
    {
      id: 18,
      name: 'Red Mage',
      role: 'Magic dps',
      damage: 0,
      strength: 216,
      dexterity: 412,
      vitality: 390,
      intelligence: 448,
      mind: 428,
      criticalhit: 400,
      determination: 390,
      directhit: 400,
      defense: 0,
      magicdefense: 0,
      tenacity: 400,
      piety: 390,
      skillspeed: 400,
      spellspeed: 400,
      mainstat: 'Intelligence',
      photo: 'https://static.wikia.nocookie.net/ffxiv_gamepedia/images/3/36/Red_Mage.png'
    },
  ]

  getJobs() : Jobs[] {
    return this.jobsList
  }

  //constructor() { }
}
