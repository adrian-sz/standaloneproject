import { Component } from '@angular/core';
import { CharacterStatsService } from '../db/characterStats.service';
import { CommonModule } from '@angular/common';

/* This is a child component */

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    CommonModule

  ],
  templateUrl:'./calculator.component.html',
  styleUrl: './calculator.component.css'
})

export class CalculatorComponent {

  constructor (public characterStatsService: CharacterStatsService){
    
  }

}
