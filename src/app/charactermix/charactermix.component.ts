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
import { AppComponent } from '../app.component';
import { CalculatorComponent } from '../calculator/calculator.component';
import { CharacterStatsService } from '../db/characterStats.service';

@Component({
  selector: 'app-charactermix',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    AppComponent,
    CalculatorComponent
  ],
  templateUrl: './charactermix.component.html',
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

  constructor(public JobsPrint : JobsService, public characterStatsService : CharacterStatsService){
    this.Joblist=JobsPrint.getJobs()
  }

  changeJob(value : Jobs){
    /* this.selectedJob.id = value.id;
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
    this.selectedJob.photo = value.photo; */
    this.selectedJob = value;

    this.characterStatsService.job = value;
    this.characterStatsService.calculateStats();
  }

}