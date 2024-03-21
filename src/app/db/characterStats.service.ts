import { Injectable } from '@angular/core';
import { CharacterStats } from './characterStats';
import { Jobs } from './jobs';
import { Races } from './races';
import { Items } from './items';
import { Bodies } from './bodies';
import { Heads } from './heads';
import { Hands } from './hands';
import { Legs } from './legs';
import { Feet } from './feet';
import { Earrings } from './earrings';
import { Necklaces } from './necklaces';

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
    };
  public race: Races = {
      id: -1,
      name: '',
      strength: 0,
      dexterity: 0,
      vitality: 0,
      intelligence: 0,
      mind: 0,
      photo: ''
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
      photo: ''
      };
  public hand: Hands = { 
      id: 4000,
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
  public legs: Legs = { 
      id: 5000,
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
  public feet: Feet = { 
        id: 6000,
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
  public earring: Earrings = { 
          id: 7000,
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
          public necklace: Necklaces = { 
            id: 8000,
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
  constructor() { }

  calculateStats() : void {
    this.characterStats.damage = this.weapon.damage;
    this.characterStats.strength = this.job.strength + this.race.strength + this.weapon.strength + this.head.strength + this.body.strength + this.hand.strength + this.legs.strength + this.feet.strength + this.earring.strength + this.necklace.strength;
    this.characterStats.dexterity = this.job.dexterity + this.race.dexterity + this.weapon.dexterity + this.head.dexterity + this.body.dexterity + this.hand.dexterity + this.legs.dexterity + this.feet.dexterity + this.earring.dexterity + this.necklace.dexterity;
    this.characterStats.vitality = this.job.vitality + this.race.vitality + this.weapon.vitality + this.head.vitality + this.body.vitality + this.hand.vitality + this.legs.vitality + this.feet.vitality + this.earring.vitality + this.necklace.vitality;
    this.characterStats.intelligence = this.job.intelligence + this.race.intelligence + this.weapon.intelligence + this.head.intelligence + this.body.intelligence + this.hand.intelligence + this.legs.intelligence + this.feet.intelligence + this.earring.intelligence + this.necklace.intelligence;
    this.characterStats.mind = this.job.mind + this.race.mind + this.weapon.mind + this.head.mind + this.body.mind + this.hand.mind + this.legs.mind + this.feet.mind + this.earring.mind + this.necklace.mind;
    this.characterStats.criticalhit = this.job.criticalhit + this.weapon.criticalhit + this.head.criticalhit + this.body.criticalhit + this.hand.criticalhit + this.legs.criticalhit + this.feet.criticalhit + this.earring.criticalhit + this.necklace.criticalhit;
    this.characterStats.determination = this.job.determination + this.weapon.determination + this.head.determination + this.body.determination + this.hand.determination + this.legs.determination + this.feet.determination + this.earring.determination + this.necklace.determination;
    this.characterStats.directhit = this.job.directhit  + this.weapon.directhit  + this.head.directhit  + this.body.directhit + this.hand.directhit + this.legs.directhit + this.feet.directhit + this.earring.directhit + this.necklace.directhit;
    this.characterStats.defense = this.job.defense + this.weapon.defense + this.head.defense + this.body.defense + this.hand.defense + this.legs.defense + this.feet.defense + this.earring.defense + this.necklace.defense;
    this.characterStats.magicdefense = this.job.magicdefense + this.weapon.magicdefense + this.head.magicdefense + this.body.magicdefense + this.hand.magicdefense + this.legs.magicdefense + this.feet.magicdefense + this.earring.magicdefense + this.necklace.magicdefense;
    this.characterStats.tenacity = this.job.tenacity + this.weapon.tenacity + this.head.tenacity + this.body.tenacity + this.hand.tenacity + this.legs.tenacity + this.feet.tenacity + this.earring.tenacity + this.necklace.tenacity;
    this.characterStats.piety = this.job.piety + this.weapon.piety + this.head.piety + this.body.piety + this.hand.piety + this.legs.piety + this.feet.piety + this.earring.piety + this.necklace.piety;
    this.characterStats.skillspeed = this.job.skillspeed + this.weapon.skillspeed + this.head.skillspeed + this.body.skillspeed + this.hand.skillspeed + this.legs.skillspeed + this.feet.skillspeed + this.earring.skillspeed + this.necklace.skillspeed;
    this.characterStats.spellspeed = this.job.spellspeed + this.weapon.spellspeed + this.head.spellspeed + this.body.spellspeed + this.hand.spellspeed + this.legs.spellspeed + this.feet.spellspeed + this.earring.spellspeed + this.necklace.spellspeed;
  }
  
}
