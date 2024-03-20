import { Component, Input, Output, EventEmitter } from '@angular/core';

/* This is a child component */

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  template: `
    <p>
      Selected job: {{jobName}}
    </p>
  `,
  styleUrl: './calculator.component.css'
})

export class CalculatorComponent {
  @Input() jobName = ''; 
 /*  @Output() jobNameEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  } */
}
