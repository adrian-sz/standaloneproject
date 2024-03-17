import { Component } from '@angular/core';
import { Jobs } from '../db/jobs';
import { Items } from '../db/items';
import { JobsService } from '../db/jobs.service';
import { ItemsService } from '../db/items.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-itemmix',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  template: `
  <div>
    <h4>Choose Your Item:</h4>
    <mat-form-field>
        <mat-select [disableOptionCentering]="true" placeholder="None" (selectionChange)="changeJob($event.value)">
            @for (item of Itemlist; track item) {
                <mat-option [value]="item">{{item.name}}</mat-option>
            }
        </mat-select>
    </mat-form-field>
</div>

<div>
    <ul>
    <img class="job-photo" [src]="selectedItem.photo " width="100" height="100">
    <li><strong>Job:</strong> {{ selectedItem.name }}</li>
    <li><strong>Slot:</strong> {{ selectedItem.slot }}</li>
    <li><strong>Strength:</strong> {{ selectedItem.strength }}</li>
    <li><strong>Dexterity:</strong> {{ selectedItem.dexterity }}</li>
    <li><strong>Vitality:</strong> {{ selectedItem.vitality }}</li>
    <li><strong>Intelligence:</strong> {{ selectedItem.intelligence }}</li>
    <li><strong>Mind:</strong> {{ selectedItem.mind }}</li>
    <li><strong>Critical hit:</strong> {{ selectedItem.criticalhit }}</li>
    <li><strong>Determination:</strong> {{ selectedItem.determination }}</li>
    <li><strong>Direct hit:</strong> {{ selectedItem.directhit }}</li>
    <li><strong>Defense:</strong> {{ selectedItem.defense }}</li>
    <li><strong>Magic defense:</strong> {{ selectedItem.magicdefense }}</li>
    <li><strong>Tenacity:</strong> {{ selectedItem.tenacity }}</li>
    <li><strong>Piety:</strong> {{ selectedItem.piety }}</li>
    <li><strong>Skill speed:</strong> {{ selectedItem.skillspeed }}</li>
    <li><strong>Spell speed:</strong> {{ selectedItem.spellspeed }}</li>
    </ul>
</div>
  `,
  styleUrl: './itemmix.component.css'
})
export class ItemmixComponent {

  selectedItem : Items = {
    id: 0,
      name: 'None',
      slot: 'None',
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
      photo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Question-mark-grey.jpg'
}

  Itemlist: Items[]

  constructor(public ItemsPrint : ItemsService){
    this.Itemlist=ItemsPrint.getItems()
  }

  changeJob(value : Items){
    this.selectedItem.id = value.id;
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
    this.selectedItem.photo = value.photo;
  }

}

