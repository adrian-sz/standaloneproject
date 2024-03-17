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
  selector: 'app-charactermix',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  template: `
 <!--  <div class="character-stats">
  <h2>Character Stats</h2>
  <ul *ngFor="let job of Joblist">
    <li><strong>Job:</strong> {{ job.name }}</li>
    <li><strong>Role:</strong> {{ job.role }}</li>
    <li><strong>Strength:</strong> {{ job.strength }}</li>
    <li><strong>Dexterity:</strong> {{ job.dexterity }}</li>
    <li><strong>Vitality:</strong> {{ job.vitality }}</li>
    <li><strong>Intelligence:</strong> {{ job.intelligence }}</li>
    <li><strong>Mind:</strong> {{ job.mind }}</li>
    <li><strong>Piety:</strong> {{ job.piety }}</li>
    <img class="job-photo" [src]="job.photo " width="100" height="100">
  </ul>
  </div> -->

  <div>
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
    <ul>
    <img class="job-photo" [src]="selectedJob.photo " width="100" height="100">
    <li><strong>Job:</strong> {{ selectedJob.name }}</li>
    <li><strong>Role:</strong> {{ selectedJob.role }}</li>
    <li><strong>Strength:</strong> {{ selectedJob.strength }}</li>
    <li><strong>Dexterity:</strong> {{ selectedJob.dexterity }}</li>
    <li><strong>Vitality:</strong> {{ selectedJob.vitality }}</li>
    <li><strong>Intelligence:</strong> {{ selectedJob.intelligence }}</li>
    <li><strong>Mind:</strong> {{ selectedJob.mind }}</li>
    <li><strong>Piety:</strong> {{ selectedJob.piety }}</li>
    </ul>
</div>

  `,
  styleUrl: './charactermix.component.css'
})

export class CharactermixComponent {

  selectedJob : Jobs = {
    id: 0,
      name: '',
      role: '',
      strength: 0,
      dexterity: 0,
      vitality: 0,
      intelligence: 0,
      mind: 0,
      piety: 0,
      photo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Question-mark-grey.jpg'
}

  Joblist: Jobs[]

  constructor(public JobsPrint : JobsService){
    this.Joblist=JobsPrint.getJobs()
  }

  changeJob(value : Jobs){
    this.selectedJob.id = value.id;
    this.selectedJob.name = value.name;
    this.selectedJob.role = value.role;
    this.selectedJob.strength = value.strength;
    this.selectedJob.dexterity = value.dexterity;
    this.selectedJob.vitality = value.vitality;
    this.selectedJob.intelligence = value.intelligence;
    this.selectedJob.mind = value.mind;
    this.selectedJob.piety = value.piety;
    this.selectedJob.photo = value.photo;
  }

}