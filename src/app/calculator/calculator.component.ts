import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CharactermixComponent } from '../charactermix/charactermix.component';

/* This is a child component */

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  template: `
    <p>
      Current job: {{jobName}}<br>
      Current str: {{jobStr}}<br>
      Current dex: {{jobDex}}<br>
    </p>
  `,
  styleUrl: './calculator.component.css'
})

export class CalculatorComponent {
  @Input() jobName = '';
  @Input() jobStr = 0;
  @Input() jobDex = 0;
 /*  @Output() jobNameEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  } */
}
