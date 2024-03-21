import { Component } from '@angular/core';
import { Heads } from '../db/heads';
import { HeadsService } from '../db/heads.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CharacterStatsService } from '../db/characterStats.service';

@Component({
  selector: 'app-headmix',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './headmix.component.html',
  styleUrl: './headmix.component.css'
})

export class HeadmixComponent {

  selectedItem : Heads = {
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

  Headlist: Heads[]

  constructor(public HeadsPrint : HeadsService, public characterStatsService : CharacterStatsService){
    this.Headlist=HeadsPrint.getHeads()
  }

  changeHead(value : Heads){
    this.selectedItem = value;
   
    this.characterStatsService.head = value;
    this.characterStatsService.calculateStats();
  }

}