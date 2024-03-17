import { Component } from '@angular/core';
import { Jobs } from '../db/jobs';
import { Items } from '../db/items';
import { JobsService } from '../db/jobs.service';
import { ItemsService } from '../db/items.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-charactermix',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    <div class="character-stats">
  <h2>Character Stats</h2>
  <ul *ngFor="let job of Joblist">
    <li><strong>Strength:</strong> {{ job.strength }}</li>
    <li><strong>Dexterity:</strong> {{ job.dexterity }}</li>
    <li><strong>Vitality:</strong> {{ job.vitality }}</li>
    <li><strong>Intelligence:</strong> {{ job.intelligence }}</li>
    <li><strong>Mind:</strong> {{ job.mind }}</li>
    <li><strong>Piety:</strong> {{ job.piety }}</li>
    <img class="job-photo" [src]="job.photo">
  </ul>
    </div>

  `,
  styleUrl: './charactermix.component.css'
})
export class CharactermixComponent {

  Joblist: Jobs[]

  constructor(public JobsPrint : JobsService){
    this.Joblist=JobsPrint.getJobs()
  }
}
