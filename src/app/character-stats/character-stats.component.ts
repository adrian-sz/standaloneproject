import { Component, OnInit } from '@angular/core';
import { Jobs } from '../db/jobs';
import { Items } from '../db/items';
import { Observable } from 'rxjs/internal/Observable';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

interface JobsDrop{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-character-stats',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
    ],
  template: `
    <div class="character-stats">
  <h2>Character Stats</h2>
  <ul>
    <li><strong>Strength:</strong> {{ character.strength }}</li>
    <li><strong>Dexterity:</strong> {{ character.dexterity }}</li>
    <li><strong>Vitality:</strong> {{ character.vitality }}</li>
    <li><strong>Intelligence:</strong> {{ character.intelligence }}</li>
    <li><strong>Mind:</strong> {{ character.mind }}</li>
    <li><strong>Piety:</strong> {{ character.piety }}</li>
  </ul>
    </div>

    <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>

    <h4>Basic mat-select</h4>
    <mat-form-field>
    <mat-label>Favorite food</mat-label>
    <mat-select>
    @for (job of jobs; track job) {
      <mat-option [value]="job.value">{{job.viewValue}}</mat-option>
    }
    </mat-select>
    </mat-form-field>

  </section>
  `,
  styleUrl: './character-stats.component.css'
})

export class CharacterStatsComponent implements OnInit{
  character: any = {
    strength: 100,
    dexterity: 90,
    vitality: 120,
    intelligence: 80,
    mind: 85,
    piety: 95
  };

  jobs: JobsDrop[] = [
    {value: 'jobs.name', viewValue: 'jobs.name'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  //jobs : Observable<Jobs[]>

  constructor() {}

  ngOnInit(): void {

  }
}
