import { Injectable } from '@angular/core';
import { Races } from './races';

@Injectable({
  providedIn: 'root'
})
export class RacesService {

  racesList: Races[] = [
    {
      id: -1,
      name: '',
      strength: 0,
      dexterity: 0,
      vitality: 0,
      intelligence: 0,
      mind: 0,
      photo: ''
    },
    {
      id: 0,
      name: 'Midlander',
      strength: 22,
      dexterity: 19,
      vitality: 20,
      intelligence: 23,
      mind: 19,
      photo: 'https://ffxiv.gamerescape.com/w/images/6/64/Main_Command_36_Icon.png'
    },
    {
      id: 1,
      name: 'Highlander',
      strength: 23,
      dexterity: 20,
      vitality: 22,
      intelligence: 18,
      mind: 20,
      photo: 'https://ffxiv.gamerescape.com/w/images/6/64/Main_Command_36_Icon.png'
    },
    {
      id: 2,
      name: 'Wildwood',
      strength: 20,
      dexterity: 23,
      vitality: 19,
      intelligence: 22,
      mind: 19,
      photo: 'https://ffxiv.gamerescape.com/w/images/6/64/Main_Command_36_Icon.png'
    },
    {
      id: 3,
      name: 'Duskwight',
      strength: 20,
      dexterity: 20,
      vitality: 19,
      intelligence: 23,
      mind: 21,
      photo: 'https://ffxiv.gamerescape.com/w/images/6/64/Main_Command_36_Icon.png'
    },
    {
      id: 4,
      name: 'Plainsfolk',
      strength: 19,
      dexterity: 23,
      vitality: 19,
      intelligence: 22,
      mind: 20,
      photo: 'https://ffxiv.gamerescape.com/w/images/6/64/Main_Command_36_Icon.png'
    },
    {
      id: 5,
      name: 'Dunesfolk',
      strength: 19,
      dexterity: 21,
      vitality: 18,
      intelligence: 22,
      mind: 23,
      photo: 'https://ffxiv.gamerescape.com/w/images/6/64/Main_Command_36_Icon.png'
    },
    {
      id: 6,
      name: 'Seekers of the Sun',
      strength: 22,
      dexterity: 23,
      vitality: 20,
      intelligence: 19,
      mind: 19,
      photo: 'https://ffxiv.gamerescape.com/w/images/6/64/Main_Command_36_Icon.png'
    },
    {
      id: 7,
      name: 'Keepers of the Moon',
      strength: 19,
      dexterity: 22,
      vitality: 18,
      intelligence: 21,
      mind: 23,
      photo: 'https://ffxiv.gamerescape.com/w/images/6/64/Main_Command_36_Icon.png'
    },
    {
      id: 8,
      name: 'Sea Wolves',
      strength: 22,
      dexterity: 19,
      vitality: 23,
      intelligence: 18,
      mind: 21,
      photo: 'https://ffxiv.gamerescape.com/w/images/6/64/Main_Command_36_Icon.png'
    },
    {
      id: 9,
      name: 'Hellsguard',
      strength: 20,
      dexterity: 18,
      vitality: 23,
      intelligence: 20,
      mind: 22,
      photo: 'https://ffxiv.gamerescape.com/w/images/6/64/Main_Command_36_Icon.png'
    },
    {
      id: 10,
      name: 'Raen',
      strength: 19,
      dexterity: 22,
      vitality: 19,
      intelligence: 20,
      mind: 23,
      photo: 'https://ffxiv.gamerescape.com/w/images/6/64/Main_Command_36_Icon.png'
    },
    {
      id: 11,
      name: 'Xaela',
      strength: 23,
      dexterity: 20,
      vitality: 22,
      intelligence: 20,
      mind: 18,
      photo: 'https://ffxiv.gamerescape.com/w/images/6/64/Main_Command_36_Icon.png'
    },
    {
      id: 12,
      name: 'Helions',
      strength: 23,
      dexterity: 17,
      vitality: 23,
      intelligence: 17,
      mind: 23,
      photo: 'https://ffxiv.gamerescape.com/w/images/6/64/Main_Command_36_Icon.png'
    },
    {
      id: 13,
      name: 'The Lost',
      strength: 23,
      dexterity: 17,
      vitality: 23,
      intelligence: 17,
      mind: 23,
      photo: 'https://ffxiv.gamerescape.com/w/images/6/64/Main_Command_36_Icon.png'
    },
    {
      id: 14,
      name: 'Rava',
      strength: 20,
      dexterity: 23,
      vitality: 18,
      intelligence: 21,
      mind: 21,
      photo: 'https://ffxiv.gamerescape.com/w/images/6/64/Main_Command_36_Icon.png'
    },
    {
      id: 15,
      name: 'Veena',
      strength: 19,
      dexterity: 20,
      vitality: 19,
      intelligence: 23,
      mind: 22,
      photo: 'https://ffxiv.gamerescape.com/w/images/6/64/Main_Command_36_Icon.png'
    },
  ]

  getRaces() : Races[] {
    return this.racesList
  }

}
