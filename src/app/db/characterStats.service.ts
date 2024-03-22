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
import { Bracelets } from './bracelets';
import { Rings } from './rings';

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
    spellspeed: 0,
    critchance: 0,
    critstrength: 0,
    physres: 0,
    magres: 0,
    manapertick: 0,
    dmgincrease: 0,
    skillhaste: 0,
    spellhaste: 0,
    direchitchance: 0,
    dmgmitigation: 0


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
      mainstat: '',
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
  public bracelet: Bracelets = { 
    id: 9000,
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
    public leftring: Rings = { 
      id: 10000,
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
      public righttring: Rings = { 
        id: 10000,
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
    this.characterStats.strength = this.job.strength + this.race.strength + this.weapon.strength + this.head.strength + this.body.strength + this.hand.strength + this.legs.strength + this.feet.strength + this.earring.strength + this.necklace.strength + this.bracelet.strength + this.leftring.strength + this.righttring.strength;
    this.characterStats.dexterity = this.job.dexterity + this.race.dexterity + this.weapon.dexterity + this.head.dexterity + this.body.dexterity + this.hand.dexterity + this.legs.dexterity + this.feet.dexterity + this.earring.dexterity + this.necklace.dexterity + this.bracelet.dexterity + this.leftring.dexterity + this.righttring.dexterity;
    this.characterStats.vitality = this.job.vitality + this.race.vitality + this.weapon.vitality + this.head.vitality + this.body.vitality + this.hand.vitality + this.legs.vitality + this.feet.vitality + this.earring.vitality + this.necklace.vitality + this.bracelet.vitality + this.leftring.vitality + this.righttring.vitality;
    this.characterStats.intelligence = this.job.intelligence + this.race.intelligence + this.weapon.intelligence + this.head.intelligence + this.body.intelligence + this.hand.intelligence + this.legs.intelligence + this.feet.intelligence + this.earring.intelligence + this.necklace.intelligence + this.bracelet.intelligence + this.leftring.intelligence + this.righttring.intelligence;
    this.characterStats.mind = this.job.mind + this.race.mind + this.weapon.mind + this.head.mind + this.body.mind + this.hand.mind + this.legs.mind + this.feet.mind + this.earring.mind + this.necklace.mind + this.bracelet.mind + this.leftring.mind + this.righttring.mind;
    this.characterStats.criticalhit = this.job.criticalhit + this.weapon.criticalhit + this.head.criticalhit + this.body.criticalhit + this.hand.criticalhit + this.legs.criticalhit + this.feet.criticalhit + this.earring.criticalhit + this.necklace.criticalhit + this.bracelet.criticalhit + this.leftring.criticalhit + this.righttring.criticalhit;
    this.characterStats.determination = this.job.determination + this.weapon.determination + this.head.determination + this.body.determination + this.hand.determination + this.legs.determination + this.feet.determination + this.earring.determination + this.necklace.determination + this.bracelet.determination + this.leftring.determination + this.righttring.determination;
    this.characterStats.directhit = this.job.directhit  + this.weapon.directhit  + this.head.directhit  + this.body.directhit + this.hand.directhit + this.legs.directhit + this.feet.directhit + this.earring.directhit + this.necklace.directhit + this.bracelet.directhit + this.leftring.directhit + this.righttring.directhit;
    this.characterStats.defense = this.job.defense + this.weapon.defense + this.head.defense + this.body.defense + this.hand.defense + this.legs.defense + this.feet.defense + this.earring.defense + this.necklace.defense + this.bracelet.defense + this.leftring.defense + this.righttring.defense;
    this.characterStats.magicdefense = this.job.magicdefense + this.weapon.magicdefense + this.head.magicdefense + this.body.magicdefense + this.hand.magicdefense + this.legs.magicdefense + this.feet.magicdefense + this.earring.magicdefense + this.necklace.magicdefense + this.bracelet.magicdefense + this.leftring.magicdefense + this.righttring.magicdefense;
    this.characterStats.tenacity = this.job.tenacity + this.weapon.tenacity + this.head.tenacity + this.body.tenacity + this.hand.tenacity + this.legs.tenacity + this.feet.tenacity + this.earring.tenacity + this.necklace.tenacity + this.bracelet.tenacity + this.leftring.tenacity + this.righttring.tenacity;
    this.characterStats.piety = this.job.piety + this.weapon.piety + this.head.piety + this.body.piety + this.hand.piety + this.legs.piety + this.feet.piety + this.earring.piety + this.necklace.piety + this.bracelet.piety + this.leftring.piety + this.righttring.piety;
    this.characterStats.skillspeed = this.job.skillspeed + this.weapon.skillspeed + this.head.skillspeed + this.body.skillspeed + this.hand.skillspeed + this.legs.skillspeed + this.feet.skillspeed + this.earring.skillspeed + this.necklace.skillspeed + this.bracelet.skillspeed + this.leftring.skillspeed + this.righttring.skillspeed;
    this.characterStats.spellspeed = this.job.spellspeed + this.weapon.spellspeed + this.head.spellspeed + this.body.spellspeed + this.hand.spellspeed + this.legs.spellspeed + this.feet.spellspeed + this.earring.spellspeed + this.necklace.spellspeed + this.bracelet.spellspeed + this.leftring.spellspeed + this.righttring.spellspeed;

    let critstat : number = 0;
    let critstrength : number = 0;
    let physres : number = 0;
    let magres : number = 0;
    let manapertick : number = 0;
    let dmgincrease : number = 0;
    let skillhaste : number = 0;
    let spellhaste : number = 0;
    let direchitchance : number = 0;
    let dmgmitigation : number = 0;

    switch(this.job.mainstat) { 
      case 'Strength': { 
         critstat = this.characterStats.strength;
         break; 
      }
      case 'Intelligence': { 
        critstat = this.characterStats.intelligence;
        break; 
      } 
      case 'Dexterity': { 
        critstat = this.characterStats.dexterity; 
        break; 
      } 
      case 'Mind': { 
        critstat = this.characterStats.mind;
        break; 
      } 

    } 

    this.characterStats.critchance = (/* critstat* */(200*(this.characterStats.criticalhit - 400)/1900)+50)/10;
    this.characterStats.critstrength = ((200*(this.characterStats.criticalhit - 400)/1900)+1400)/10;
    this.characterStats.physres = 15*(this.characterStats.defense/1900);
    this.characterStats.magres = 15*(this.characterStats.magicdefense/1900);
    this.characterStats.manapertick = ((150*(this.characterStats.piety-390)/1900)+200);
    this.characterStats.dmgincrease = (((1000+(140*(this.characterStats.determination-390)/1900)))/10)-100
    this.characterStats.skillhaste = (2500*(1000+(130*(400-this.characterStats.skillspeed)/1900))/10000)/100
    this.characterStats.spellhaste = (2500*(1000+(130*(400-this.characterStats.spellspeed)/1900))/10000)/100
    this.characterStats.direchitchance = (550*(this.characterStats.directhit-400)/1900)/10
    this.characterStats.dmgmitigation = (1000 - (1000-(100*(this.characterStats.tenacity-400)/1900)))/10

  }
}
