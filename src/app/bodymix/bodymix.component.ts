import { Component } from '@angular/core';
import { Bodies } from '../db/bodies';
import { BodiesService } from '../db/bodies.service';
import { NgModule } from '@angular/core';
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
  template:  `
  <div class="choosetext">
    <h4>Choose your body slot item:</h4>
    <mat-form-field>
        <mat-select [disableOptionCentering]="true" placeholder="None" (selectionChange)="changeHead($event.value)">
            @for (item of Bodylist; track item) {
                <mat-option [value]="item">{{item.name}}</mat-option>
            }
        </mat-select>
    </mat-form-field>
  </div>

  <div>
<img *ngIf="selectedItem.photo!=''" class="itemphoto" [src]="selectedItem.photo" width="100" height="100">
</div>

<div class="statstext">
    <ul>
    <li class="listingname" *ngIf="selectedItem.name!=''"><strong>Item name:</strong> {{ selectedItem.name }}</li>
    <li class="listing" *ngIf="selectedItem.strength>0"><strong>Strength: </strong>{{ selectedItem.strength }}</li>
    <li class="listing" *ngIf="selectedItem.dexterity>0"><strong>Dexterity:</strong> {{ selectedItem.dexterity }}</li>
    <li class="listing" *ngIf="selectedItem.vitality>0"><strong>Vitality:</strong> {{ selectedItem.vitality }}</li>
    <li class="listing" *ngIf="selectedItem.intelligence>0"><strong>Intelligence:</strong> {{ selectedItem.intelligence }}</li>
    <li class="listing" *ngIf="selectedItem.mind>0"><strong>Mind:</strong> {{ selectedItem.mind }}</li>
    <li class="listing" *ngIf="selectedItem.criticalhit>0"><strong>Critical hit:</strong> {{ selectedItem.criticalhit }}</li>
    <li class="listing" *ngIf="selectedItem.determination>0"><strong>Determination:</strong> {{ selectedItem.determination }}</li>
    <li class="listing" *ngIf="selectedItem.directhit>0"><strong>Direct hit:</strong> {{ selectedItem.directhit }}</li>
    <li class="listing" *ngIf="selectedItem.defense>0"><strong>Defense:</strong> {{ selectedItem.defense }}</li>
    <li class="listing" *ngIf="selectedItem.magicdefense>0"><strong>Magic defense:</strong> {{ selectedItem.magicdefense }}</li>
    <li class="listing" *ngIf="selectedItem.tenacity>0"><strong>Tenacity:</strong> {{ selectedItem.tenacity }}</li>
    <li class="listing" *ngIf="selectedItem.piety>0"><strong>Piety:</strong> {{ selectedItem.piety }}</li>
    <li class="listing" *ngIf="selectedItem.skillspeed>0"><strong>Skill speed:</strong> {{ selectedItem.skillspeed }}</li>
    <li class="listing" *ngIf="selectedItem.spellspeed>0"><strong>Spell speed:</strong> {{ selectedItem.spellspeed }}</li>
    </ul>
</div>
  `,
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

