import { Component } from '@angular/core';
import { Hands } from '../db/hands';
import { HandsService } from '../db/hands.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CharacterStatsService } from '../db/characterStats.service';

@Component({
  selector: 'app-handmix',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './handmix.component.html',
  styleUrl: './handmix.component.css'
})

export class HandmixComponent {

  selectedItem : Hands = {
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

Handlist: Hands[]

constructor(public HandsPrint : HandsService, public characterStatsService : CharacterStatsService){
  this.Handlist=HandsPrint.getHands()
}

changeHand(value: Hands){
  this.selectedItem = value;

  this.characterStatsService.hand = value;
  this.characterStatsService.calculateStats();
}

}
