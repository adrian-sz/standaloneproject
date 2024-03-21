import { Injectable } from '@angular/core';
import { CharacterStats } from './characterStats';
import { Jobs } from './jobs';
import { Races } from './races';
import { Items } from './items';
import { Bodies } from './bodies';
import { Heads } from './heads';

@Injectable({
  providedIn: 'root'
})
export class CharacterStatsService {

  public characterStats : CharacterStats = {
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
    spellspeed: 0

  };
  public job: Jobs = {
    id: 0,
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
      photo: ''
    }
  public race: Races = {
      id: -1,
      name: '',
      strength: 0,
      dexterity: 0,
      vitality: 0,
      intelligence: 0,
      mind: 0
    };
  public weapon: Items = {
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
    };
  public head: Heads = { 
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
      };
  public body: Bodies = { 
      id: 3000,
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
      photo: 'null'
      };

  constructor() { }

  calculateStats() : void {
    this.characterStats.damage = this.weapon.damage;
    this.characterStats.strength = this.job.strength + this.race.strength + this.weapon.strength + this.head.strength + this.body.strength;
    this.characterStats.vitality = this.job.vitality + this.race.vitality + this.weapon.vitality + this.head.vitality + this.body.vitality;
    this.characterStats.dexterity = this.job.dexterity + this.race.dexterity + this.weapon.dexterity + this.head.dexterity + this.body.dexterity;
    this.characterStats.vitality = this.job.vitality + this.race.vitality + this.weapon.vitality + this.head.vitality + this.body.vitality;
    this.characterStats.intelligence = this.job.intelligence + this.race.intelligence + this.weapon.intelligence + this.head.intelligence + this.body.intelligence;
    this.characterStats.vitality = this.job.vitality + this.race.vitality + this.weapon.vitality + this.head.vitality + this.body.vitality;
    this.characterStats.mind = this.job.mind + this.race.mind + this.weapon.mind + this.head.mind + this.body.mind;
    this.characterStats.criticalhit = this.job.criticalhit + this.weapon.criticalhit + this.head.criticalhit + this.body.criticalhit;
    this.characterStats.determination = this.job.determination + this.weapon.determination + this.head.determination + this.body.determination;
    this.characterStats.directhit = this.job.directhit  + this.weapon.directhit  + this.head.directhit  + this.body.directhit ;
    this.characterStats.defense = this.job.defense + this.weapon.defense + this.head.defense + this.body.defense;
    this.characterStats.magicdefense = this.job.magicdefense + this.weapon.magicdefense + this.head.magicdefense + this.body.magicdefense;
    this.characterStats.tenacity = this.job.tenacity + this.weapon.tenacity + this.head.tenacity + this.body.tenacity;
    this.characterStats.piety = this.job.piety + this.weapon.piety + this.head.piety + this.body.piety;
    this.characterStats.skillspeed = this.job.skillspeed + this.weapon.skillspeed + this.head.skillspeed + this.body.skillspeed;
    this.characterStats.spellspeed = this.job.spellspeed + this.weapon.spellspeed + this.head.spellspeed + this.body.spellspeed;
  }
  
}