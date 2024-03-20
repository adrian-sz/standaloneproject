import { Component, Input, Output } from '@angular/core';
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
import { CalculatorComponent } from '../calculator/calculator.component';

@Component({
  selector: 'app-charactermix',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    CalculatorComponent
  ],
  template: `
  <div class="choosetext">
    <h4>Choose Your Job:</h4>
    <mat-form-field>
        <mat-select [disableOptionCentering]="true" placeholder="None" (selectionChange)="changeJob($event.value)">
            @for (job of Joblist; track job) {
                <mat-option [value]="job">{{job.name}}</mat-option>
            }
        </mat-select>
    </mat-form-field>
  </div>

  <div>
<img *ngIf="selectedJob.photo!=''" class="jobphoto" [src]="selectedJob.photo" width="100" height="100">
</div>

  <div class="statstext">
    <ul>
    <li class="listingname" *ngIf="selectedJob.name!=''"><strong>Job:</strong> {{ selectedJob.name }}</li>
    <li class="listingname" *ngIf="selectedJob.role!=''"><strong>Role:</strong> {{ selectedJob.role }}</li>
    <li class="listing" *ngIf="selectedJob.damage>0"><strong>Damage:</strong> {{ selectedJob.damage }}</li>
    <li class="listing" *ngIf="selectedJob.strength>0"><strong>Strength:</strong> {{ selectedJob.strength }}</li>
    <li class="listing" *ngIf="selectedJob.dexterity>0"><strong>Dexterity:</strong> {{ selectedJob.dexterity }}</li>
    <li class="listing" *ngIf="selectedJob.vitality>0"><strong>Vitality:</strong> {{ selectedJob.vitality }}</li>
    <li class="listing" *ngIf="selectedJob.intelligence>0"><strong>Intelligence:</strong> {{ selectedJob.intelligence }}</li>
    <li class="listing" *ngIf="selectedJob.mind>0"><strong>Mind:</strong> {{ selectedJob.mind }}</li>
    <li class="listing" *ngIf="selectedJob.criticalhit>0"><strong>Critical hit:</strong> {{ selectedJob.criticalhit }}</li>
    <li class="listing" *ngIf="selectedJob.determination>0"><strong>Determination:</strong> {{ selectedJob.determination }}</li>
    <li class="listing" *ngIf="selectedJob.directhit>0"><strong>Direct hit:</strong> {{ selectedJob.directhit }}</li>
    <li class="listing" *ngIf="selectedJob.defense>0"><strong>Defense:</strong> {{ selectedJob.defense }}</li>
    <li class="listing" *ngIf="selectedJob.magicdefense>0"><strong>Magic defense:</strong> {{ selectedJob.magicdefense }}</li>
    <li class="listing" *ngIf="selectedJob.tenacity>0"><strong>Tenacity:</strong> {{ selectedJob.tenacity }}</li>
    <li class="listing" *ngIf="selectedJob.piety>0"><strong>Piety:</strong> {{ selectedJob.piety }}</li>
    <li class="listing" *ngIf="selectedJob.skillspeed>0"><strong>Skill speed:</strong> {{ selectedJob.skillspeed }}</li>
    <li class="listing" *ngIf="selectedJob.spellspeed>0"><strong>Spell speed:</strong> {{ selectedJob.spellspeed }}</li>
    </ul>
    </div>

          <div>
            <app-calculator [jobName]="selectedJob.name" [jobStr]="selectedJob.strength" [jobDex]="selectedJob.dexterity"></app-calculator>
          </div>
  `,
  styleUrl: './charactermix.component.css'
})

export class CharactermixComponent {

  selectedJob : Jobs = {
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
}

  Joblist: Jobs[]

  constructor(public JobsPrint : JobsService){
    this.Joblist=JobsPrint.getJobs()
  }

  changeJob(value : Jobs){
    this.selectedJob.id = value.id;
    this.selectedJob.name = value.name;
    this.selectedJob.role = value.role;
    this.selectedJob.damage = value.damage;
    this.selectedJob.strength = value.strength;
    this.selectedJob.dexterity = value.dexterity;
    this.selectedJob.vitality = value.vitality;
    this.selectedJob.intelligence = value.intelligence;
    this.selectedJob.mind = value.mind;
    this.selectedJob.criticalhit = value.mind;
    this.selectedJob.determination = value.determination;
    this.selectedJob.directhit = value.directhit;
    this.selectedJob.defense = value.defense;
    this.selectedJob.magicdefense = value.magicdefense;
    this.selectedJob.tenacity = value.tenacity;
    this.selectedJob.piety = value.piety;
    this.selectedJob.skillspeed = value.skillspeed;
    this.selectedJob.spellspeed = value.spellspeed;
    this.selectedJob.photo = value.photo;
  }

}