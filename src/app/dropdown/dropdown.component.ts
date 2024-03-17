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

interface JobsDrop{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule],
  template: `
  <div class="character-stats">

  <h4>Choose your job:</h4>
    <mat-form-field>
    <mat-label>Select</mat-label>
    <mat-select>
    @for (job of jobs; track job) {
      <mat-option [value]="job.value">{{job.viewValue}}</mat-option>
    }
    </mat-select>
    </mat-form-field>

  </div>
`,
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  character: any = {
  strength: 100,
  dexterity: 90,
  vitality: 120,
  intelligence: 80,
  mind: 85,
  piety: 95
};

jobs: JobsDrop[] = [
  {value: 'war', viewValue: 'Warrior'},
  {value: 'whm', viewValue: 'White Mage'},
  {value: 'nin', viewValue: 'Ninja'},
  {value: 'dnc', viewValue: 'Dancer'},
];
//jobs : Observable<Jobs[]>

constructor() {}

ngOnInit(): void {

}

}
