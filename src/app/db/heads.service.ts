import { Injectable } from '@angular/core';
import { Heads } from './heads';

@Injectable({
  providedIn: 'root'
})

export class HeadsService {

  headsList: Heads[] = [
    { 
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
      id: 2001,
      name: 'Ascension Face Guard of Fending',
      slot: 'Head',
      strength: 248,
      dexterity: 0,
      vitality: 277,
      intelligence: 0,
      mind: 0,
      criticalhit: 184,
      determination: 129,
      directhit: 0,
      defense: 892,
      magicdefense: 892,
      tenacity: 0,
      piety: 0,
      skillspeed: 0,
      spellspeed: 0,
      photo: 'https://ffxiv.gamerescape.com/w/images/3/39/Ascension_Face_Guard_of_Fending_Icon.png'
      },
      { 
      id: 2002,
      name: 'Augmented Credendum Circlet of Fending',
      slot: 'Head',
      strength: 248,
      dexterity: 0,
      vitality: 277,
      intelligence: 0,
      mind: 0,
      criticalhit: 129,
      determination: 0,
      directhit: 0,
      defense: 892,
      magicdefense: 892,
      tenacity: 184,
      piety: 0,
      skillspeed: 0,
      spellspeed: 0,
      photo: 'https://ffxiv.gamerescape.com/w/images/3/38/Augmented_Credendum_Circlet_of_Fending_Icon.png'
      },
      { 
      id: 2015,
      name: 'Augmented Diadochos Headband of Fending',
      slot: 'Head',
      strength: 235,
      dexterity: 0,
      vitality: 260,
      intelligence: 0,
      mind: 0,
      criticalhit: 180,
      determination: 0,
      directhit: 0,
      defense: 873,
      magicdefense: 873,
      tenacity: 126,
      piety: 0,
      skillspeed: 0,
      spellspeed: 0,
      photo: 'https://ffxiv.gamerescape.com/w/images/c/c0/Augmented_Diadochos_Headband_of_Fending_Icon.png'
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
      id: 2003,
      name: 'Ascension Turban of Healing',
      slot: 'Head',
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
      piety: 0,
      skillspeed: 0,
      spellspeed: 129,
      photo: 'https://ffxiv.gamerescape.com/w/images/0/00/Ascension_Turban_of_Healing_Icon.png'
      },
      { 
      id: 2004,
      name: 'Augmented Credendum Circlet of Healing',
      slot: 'Head',
      strength: 0,
      dexterity: 0,
      vitality: 249,
      intelligence: 0,
      mind: 248,
      criticalhit: 129,
      determination: 184,
      directhit: 0,
      defense: 357,
      magicdefense: 624,
      tenacity: 0,
      piety: 0,
      skillspeed: 0,
      spellspeed: 0,
      photo: 'https://ffxiv.gamerescape.com/w/images/7/7c/Augmented_Credendum_Circlet_of_Healing_Icon.png'
      },
      { 
      id: 2016,
      name: 'Augmented Diadochos Beret of Healing',
      slot: 'Head',
      strength: 0,
      dexterity: 0,
      vitality: 234,
      intelligence: 0,
      mind: 235,
      criticalhit: 126,
      determination: 0,
      directhit: 0,
      defense: 349,
      magicdefense: 611,
      tenacity: 0,
      piety: 180,
      skillspeed: 0,
      spellspeed: 0,
      photo: 'https://ffxiv.gamerescape.com/w/images/c/c1/Augmented_Diadochos_Beret_of_Healing_Icon.png'
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
        id: 2005,
        name: 'Ascension Hat of Striking',
        slot: 'Head',
        strength: 248,
        dexterity: 0,
        vitality: 277,
        intelligence: 0,
        mind: 0,
        criticalhit: 184,
        determination: 0,
        directhit: 0,
        defense: 491,
        magicdefense: 491,
        tenacity: 0,
        piety: 0,
        skillspeed: 129,
        spellspeed: 0,
        photo: 'https://ffxiv.gamerescape.com/w/images/a/a3/Ascension_Hat_of_Striking_Icon.png'
        },
        { 
        id: 2006,
        name: 'Augmented Credendum Blinder of Striking',
        slot: 'Head',
        strength: 248,
        dexterity: 0,
        vitality: 277,
        intelligence: 0,
        mind: 0,
        criticalhit: 129,
        determination: 0,
        directhit: 184,
        defense: 491,
        magicdefense: 491,
        tenacity: 0,
        piety: 0,
        skillspeed: 0,
        spellspeed: 0,
        photo: 'https://ffxiv.gamerescape.com/w/images/8/81/Augmented_Credendum_Blinder_of_Striking_Icon.png'
      },
      { 
      id: 2017,
      name: 'Augmented Diadochos Headband of Striking',
      slot: 'Head',
      strength: 235,
      dexterity: 0,
      vitality: 260,
      intelligence: 0,
      mind: 0,
      criticalhit: 180,
      determination: 0,
      directhit: 0,
      defense: 480,
      magicdefense: 480,
      tenacity: 0,
      piety: 0,
      skillspeed: 0,
      spellspeed: 0,
      photo: 'https://ffxiv.gamerescape.com/w/images/5/58/Augmented_Diadochos_Headband_of_Striking_Icon.png'
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
        id: 2007,
        name: 'Ascension Face Guard of Maiming',
        slot: 'Head',
        strength: 248,
        dexterity: 0,
        vitality: 277,
        intelligence: 0,
        mind: 0,
        criticalhit: 0,
        determination: 0,
        directhit: 129,
        defense: 624,
        magicdefense: 491,
        tenacity: 0,
        piety: 0,
        skillspeed: 184,
        spellspeed: 0,
        photo: 'https://ffxiv.gamerescape.com/w/images/c/cb/Ascension_Face_Guard_of_Maiming_Icon.png'
        },
        { 
        id: 2008,
        name: 'Augmented Credendum Circlet of Maiming',
        slot: 'Head',
        strength: 248,
        dexterity: 0,
        vitality: 277,
        intelligence: 0,
        mind: 0,
        criticalhit: 184,
        determination: 0,
        directhit: 129,
        defense: 624,
        magicdefense: 491,
        tenacity: 0,
        piety: 0,
        skillspeed: 0,
        spellspeed: 0,
        photo: 'https://ffxiv.gamerescape.com/w/images/c/ce/Augmented_Credendum_Circlet_of_Maiming_Icon.png'
      },
      { 
      id: 2018,
      name: 'Augmented Diadochos Headband of Maiming',
      slot: 'Head',
      strength: 235,
      dexterity: 0,
      vitality: 260,
      intelligence: 0,
      mind: 0,
      criticalhit: 126,
      determination: 0,
      directhit: 180,
      defense: 480,
      magicdefense: 480,
      tenacity: 0,
      piety: 0,
      skillspeed: 0,
      spellspeed: 0,
      photo: 'https://ffxiv.gamerescape.com/w/images/1/1f/Augmented_Diadochos_Headband_of_Maiming_Icon.png'
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
    id: 2009,
    name: 'Ascension Hat of Scouting ',
    slot: 'Head',
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
    photo: 'https://ffxiv.gamerescape.com/w/images/1/10/Ascension_Hat_of_Scouting_Icon.png'
  },      
  { 
    id: 2010,
    name: 'Augmented Credendum Blinder of Scouting',
    slot: 'Head',
    strength: 0,
    dexterity: 248,
    vitality: 277,
    intelligence: 0,
    mind: 0,
    criticalhit: 129,
    determination: 184,
    directhit: 0,
    defense: 491,
    magicdefense: 491,
    tenacity: 0,
    piety: 0,
    skillspeed: 0,
    spellspeed: 0,
    photo: 'https://ffxiv.gamerescape.com/w/images/1/11/Augmented_Credendum_Blinder_of_Scouting_Icon.png'
    },
    { 
    id: 2019,
    name: 'Augmented Diadochos Headband of Scouting',
    slot: 'Head',
    strength: 0,
    dexterity:235,
    vitality: 260,
    intelligence: 0,
    mind: 0,
    criticalhit: 180,
    determination: 0,
    directhit: 126,
    defense: 480,
    magicdefense: 480,
    tenacity: 0,
    piety: 0,
    skillspeed: 0,
    spellspeed: 0,
    photo: 'https://ffxiv.gamerescape.com/w/images/5/51/Augmented_Diadochos_Headband_of_Scouting_Icon.png'
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
      id: 2011,
      name: 'Ascension Hat of Aiming',
      slot: 'Head',
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
      photo: 'https://ffxiv.gamerescape.com/w/images/7/70/Ascension_Hat_of_Aiming_Icon.png'
    },      
    { 
      id: 2012,
      name: 'Augmented Credendum Hat of Aiming',
      slot: 'Head',
      strength: 0,
      dexterity: 248,
      vitality: 277,
      intelligence: 0,
      mind: 0,
      criticalhit: 129,
      determination: 0,
      directhit: 0,
      defense: 491,
      magicdefense: 491,
      tenacity: 0,
      piety: 0,
      skillspeed: 184,
      spellspeed: 0,
      photo: 'https://ffxiv.gamerescape.com/w/images/d/db/Augmented_Credendum_Hat_of_Aiming_Icon.png'
      },
      { 
      id: 2020,
      name: 'Augmented Diadochos Headband of Aiming',
      slot: 'Head',
      strength: 0,
      dexterity:235,
      vitality: 260,
      intelligence: 0,
      mind: 0,
      criticalhit: 180,
      determination: 0,
      directhit: 126,
      defense: 480,
      magicdefense: 480,
      tenacity: 0,
      piety: 0,
      skillspeed: 0,
      spellspeed: 0,
      photo: 'https://ffxiv.gamerescape.com/w/images/0/01/Augmented_Diadochos_Headband_of_Aiming_Icon.png'
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
      id: 2013,
      name: 'Ascension Turban of Casting',
      slot: 'Head',
      strength: 0,
      dexterity: 0,
      vitality: 249,
      intelligence: 248,
      mind: 0,
      criticalhit: 0,
      determination: 129,
      directhit: 0,
      defense: 357,
      magicdefense: 624,
      tenacity: 0,
      piety: 0,
      skillspeed: 0,
      spellspeed: 184,
      photo: 'https://ffxiv.gamerescape.com/w/images/3/3d/Ascension_Turban_of_Casting_Icon.png'
      },      
      { 
      id: 2014,
      name: 'Augmented Credendum Circlet of Casting',
      slot: 'Head',
      strength: 0,
      dexterity: 0,
      vitality: 249,
      intelligence: 248,
      mind: 0,
      criticalhit: 184,
      determination: 0,
      directhit: 129,
      defense: 357,
      magicdefense: 624,
      tenacity: 0,
      piety: 0,
      skillspeed: 0,
      spellspeed: 0,
      photo: 'https://ffxiv.gamerescape.com/w/images/2/28/Augmented_Credendum_Circlet_of_Casting_Icon.png'
      },
      { 
      id: 2021,
      name: 'Augmented Diadochos Beret of Casting',
      slot: 'Head',
      strength: 0,
      dexterity: 0,
      vitality: 234,
      intelligence: 235,
      mind: 0,
      criticalhit: 0,
      determination: 126,
      directhit: 126,
      defense: 480,
      magicdefense: 480,
      tenacity: 0,
      piety: 0,
      skillspeed: 0,
      spellspeed: 180,
      photo: 'https://ffxiv.gamerescape.com/w/images/4/4d/Augmented_Diadochos_Beret_of_Casting_Icon.png'
      },
  ]

    getHeads() : Heads[] {
      return this.headsList
    }
}
