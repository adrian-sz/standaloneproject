import { Component, OnInit } from '@angular/core';
import { Bodies } from '../db/bodies';
import { BodiesService } from '../db/bodies.service';
import { CommonModule } from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CharacterStatsService } from '../db/characterStats.service';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {AsyncPipe} from '@angular/common';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-bodymix',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    AsyncPipe,
    MatAutocompleteModule,
    ReactiveFormsModule,
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

  changeBody(value : Bodies){
    this.selectedItem = value;

    this.characterStatsService.body = value;
    this.characterStatsService.calculateStats();
  }

}
