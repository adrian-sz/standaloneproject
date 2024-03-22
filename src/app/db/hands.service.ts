import { Injectable } from '@angular/core';
import { Hands } from './hands';

@Injectable({
  providedIn: 'root'
})

export class HandsService {

  handsList: Hands[] = [
    { 
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
      },
      { 
      id: -1,
      name: '=Fending=',
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
      },
    { 
      id: 4001,
      name: 'Ascension Gauntlets of Fending',
      slot: 'Hands',
      strength: 248,
      dexterity: 0,
      vitality: 277,
      intelligence: 0,
      mind: 0,
      criticalhit: 184,
      determination: 0,
      directhit: 0,
      defense: 892,
      magicdefense: 892,
      tenacity: 129,
      piety: 0,
      skillspeed: 0,
      spellspeed: 0,
      photo: 'https://ffxiv.gamerescape.com/w/images/a/ae/Ascension_Gauntlets_of_Fending_Icon.png'
      },
      { 
      id: 4002,
      name: 'Augmented Credendum Gauntlets of Fending ',
      slot: 'Hands',
      strength: 248,
      dexterity: 0,
      vitality: 277,
      intelligence: 0,
      mind: 0,
      criticalhit: 0,
      determination: 0,
      directhit: 0,
      defense: 892,
      magicdefense: 892,
      tenacity: 129,
      piety: 0,
      skillspeed: 184,
      spellspeed: 0,
      photo: 'https://ffxiv.gamerescape.com/w/images/2/21/Augmented_Credendum_Gauntlets_of_Fending_Icon.png'
      },
      { 
      id: -1,
      name: '=Healing=',
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
      },
    { 
      id: 4003,
      name: 'Ascension Gloves of Healing',
      slot: 'Hands',
      strength: 0,
      dexterity: 0,
      vitality: 249,
      intelligence: 0,
      mind: 248,
      criticalhit: 0,
      determination: 184,
      directhit: 0,
      defense: 357,
      magicdefense: 624,
      tenacity: 0,
      piety: 129,
      skillspeed: 0,
      spellspeed: 0,
      photo: 'https://ffxiv.gamerescape.com/w/images/c/ce/Ascension_Gloves_of_Healing_Icon.png'
      },
      { 
      id: 4004,
      name: 'Augmented Credendum Gauntlets of Healing',
      slot: 'Hands',
      strength: 0,
      dexterity: 0,
      vitality: 249,
      intelligence: 0,
      mind: 248,
      criticalhit: 184,
      determination: 129,
      directhit: 0,
      defense: 357,
      magicdefense: 624,
      tenacity: 0,
      piety: 0,
      skillspeed: 0,
      spellspeed: 0,
      photo: 'https://ffxiv.gamerescape.com/w/images/b/ba/Augmented_Credendum_Gauntlets_of_Healing_Icon.png'
      },
      { 
        id: -1,
        name: '=Striking=',
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
        },
      { 
        id: 4005,
        name: 'Ascension Gloves of Striking',
        slot: 'Body',
        strength: 248,
        dexterity: 0,
        vitality: 277,
        intelligence: 0,
        mind: 0,
        criticalhit: 0,
        determination: 184,
        directhit: 0,
        defense: 658,
        magicdefense: 658,
        tenacity: 0,
        piety: 0,
        skillspeed: 129,
        spellspeed: 0,
        photo: 'https://ffxiv.gamerescape.com/w/images/1/10/Ascension_Gloves_of_Striking_Icon.png'
        },
        { 
        id: 4006,
        name: 'Augmented Credendum Armguards of Striking',
        slot: 'Hands',
        strength: 248,
        dexterity: 0,
        vitality: 277,
        intelligence: 0,
        mind: 0,
        criticalhit: 184,
        determination: 129,
        directhit: 0,
        defense: 658,
        magicdefense: 658,
        tenacity: 0,
        piety: 0,
        skillspeed: 0,
        spellspeed: 0,
        photo: 'https://ffxiv.gamerescape.com/w/images/6/65/Augmented_Credendum_Armguards_of_Striking_Icon.png'
      },
      { 
        id: -1,
        name: '=Maiming=',
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
        },
      { 
        id: 4007,
        name: 'Ascension Gauntlets of Maiming',
        slot: 'Hands',
        strength: 248,
        dexterity: 0,
        vitality: 277,
        intelligence: 0,
        mind: 0,
        criticalhit: 0,
        determination: 129,
        directhit: 184,
        defense: 624,
        magicdefense: 491,
        tenacity: 0,
        piety: 0,
        skillspeed: 0,
        spellspeed: 0,
        photo: 'https://ffxiv.gamerescape.com/w/images/0/03/Ascension_Gauntlets_of_Maiming_Icon.png'
        },
        { 
        id: 4008,
        name: 'Augmented Credendum Gauntlets of Maiming',
        slot: 'Hands',
        strength: 248,
        dexterity: 0,
        vitality: 277,
        intelligence: 0,
        mind: 0,
        criticalhit: 129,
        determination: 184,
        directhit: 0,
        defense: 624,
        magicdefense: 491,
        tenacity: 0,
        piety: 0,
        skillspeed: 0,
        spellspeed: 0,
        photo: 'https://ffxiv.gamerescape.com/w/images/7/7b/Augmented_Credendum_Gauntlets_of_Maiming_Icon.png'
      },
      { 
    id: -1,
    name: '=Scouting=',
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
    },
  { 
    id: 4009,
    name: 'Ascension Gloves of Scouting',
    slot: 'Hands',
    strength: 0,
    dexterity: 248,
    vitality: 277,
    intelligence: 0,
    mind: 0,
    criticalhit: 0,
    determination: 184,
    directhit: 0,
    defense: 491,
    magicdefense: 491,
    tenacity: 0,
    piety: 0,
    skillspeed: 129,
    spellspeed: 0,
    photo: 'https://ffxiv.gamerescape.com/w/images/1/17/Ascension_Gloves_of_Scouting_Icon.png'
  },      
  { 
    id: 4010,
    name: 'Augmented Credendum Armguards of Scouting',
    slot: 'Hands',
    strength: 0,
    dexterity: 248,
    vitality: 277,
    intelligence: 0,
    mind: 0,
    criticalhit: 184,
    determination: 0,
    directhit: 129,
    defense: 491,
    magicdefense: 491,
    tenacity: 0,
    piety: 0,
    skillspeed: 0,
    spellspeed: 0,
    photo: 'https://ffxiv.gamerescape.com/w/images/8/86/Augmented_Credendum_Armguards_of_Scouting_Icon.png'
    },
        { 
      id: -1,
      name: '=Aiming=',
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
      },
    { 
      id: 4011,
      name: 'Ascension Gloves of Aiming',
      slot: 'Hands',
      strength: 0,
      dexterity: 248,
      vitality: 277,
      intelligence: 0,
      mind: 0,
      criticalhit: 184,
      determination: 129,
      directhit: 0,
      defense: 491,
      magicdefense: 491,
      tenacity: 0,
      piety: 0,
      skillspeed: 0,
      spellspeed: 0,
      photo: 'https://ffxiv.gamerescape.com/w/images/7/75/Ascension_Gloves_of_Aiming_Icon.png'
    },      
    { 
      id: 4012,
      name: 'Augmented Credendum Halfgloves of Aiming',
      slot: 'Hands',
      strength: 0,
      dexterity: 248,
      vitality: 277,
      intelligence: 0,
      mind: 0,
      criticalhit: 0,
      determination: 184,
      directhit: 129,
      defense: 491,
      magicdefense: 491,
      tenacity: 0,
      piety: 0,
      skillspeed: 0,
      spellspeed: 0,
      photo: 'https://ffxiv.gamerescape.com/w/images/3/3b/Augmented_Credendum_Halfgloves_of_Aiming_Icon.png'
      },
      { 
      id: -1,
      name: '=Casting=',
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
      },
    { 
      id: 4013,
      name: 'Ascension Gloves of Casting',
      slot: 'Hands',
      strength: 0,
      dexterity: 0,
      vitality: 249,
      intelligence: 248,
      mind: 0,
      criticalhit: 184,
      determination: 129,
      directhit: 0,
      defense: 357,
      magicdefense: 624,
      tenacity: 0,
      piety: 0,
      skillspeed: 0,
      spellspeed: 0,
      photo: 'https://ffxiv.gamerescape.com/w/images/0/07/Ascension_Gloves_of_Casting_Icon.png'
      },      
      { 
      id: 4014,
      name: 'Augmented Credendum Gauntlets of Casting',
      slot: 'Hands',
      strength: 0,
      dexterity: 0,
      vitality: 249,
      intelligence: 248,
      mind: 0,
      criticalhit: 0,
      determination: 0,
      directhit: 129,
      defense: 357,
      magicdefense: 624,
      tenacity: 0,
      piety: 0,
      skillspeed: 0,
      spellspeed: 184,
      photo: 'https://ffxiv.gamerescape.com/w/images/e/e7/Augmented_Credendum_Gauntlets_of_Casting_Icon.png'
      },
  ]

    getHands() : Hands[] {
      return this.handsList
    }
}
