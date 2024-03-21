import { Component } from '@angular/core';
import { Bodies } from '../db/bodies';
import { BodiesService } from '../db/bodies.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CharacterStatsService } from '../db/characterStats.service';

@Component({
  selector: 'app-bodymix',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl:'./bodymix.component.html',
  styleUrl: './bodymix.component.css'
})
export class BodymixComponent {

  selectedItem : Bodies = {
    id: 0,
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
}

  Bodylist: Bodies[]

  constructor(public BodiesPrint : BodiesService, public characterStatsService : CharacterStatsService){
    this.Bodylist=BodiesPrint.getBodies()
  }

  changeHead(value : Bodies){
    /* this.selectedItem.id = value.id;
    this.selectedItem.name = value.name;
    this.selectedItem.slot = value.slot;
    this.selectedItem.strength = value.strength;
    this.selectedItem.dexterity = value.dexterity;
    this.selectedItem.vitality = value.vitality;
    this.selectedItem.intelligence = value.intelligence;
    this.selectedItem.mind = value.mind;
    this.selectedItem.criticalhit = value.mind;
    this.selectedItem.determination = value.determination;
    this.selectedItem.directhit = value.directhit;
    this.selectedItem.defense = value.defense;
    this.selectedItem.magicdefense = value.magicdefense;
    this.selectedItem.tenacity = value.tenacity;
    this.selectedItem.piety = value.piety;
    this.selectedItem.skillspeed = value.skillspeed;
    this.selectedItem.spellspeed = value.spellspeed;
    this.selectedItem.photo = value.photo; */
    this.selectedItem = value;

    this.characterStatsService.calculateStats();
  }

}

