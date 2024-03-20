import { Component, Input, Output, EventEmitter, input } from '@angular/core';
import { CharactermixComponent } from '../charactermix/charactermix.component';

/* This is a child component */

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  template: `
    <p>
      Current job: {{jobName}}<br>
      Current race: {{raceName}}<br>
      Current job str: {{jobStr}}<br>
      Current race dex: {{raceDex}}<br>
      Current str: {{str}}<br>
      Current dex: {{dex}}<br>
    </p>
  `,
  styleUrl: './calculator.component.css'
})

export class CalculatorComponent {
  @Input() jobName = '';
  @Input() raceName = '';
  @Input() jobStr = 0;
  @Input() raceStr = 0;
  @Input() jobDex = 0;
  @Input() raceDex = 0;

  @Input() str = this.jobStr /* + this.raceStr */;
  @Input() dex = this.jobDex + this.raceDex;
  
  getTotalStr() {
    {
        return this.jobStr + this.raceStr;
    }
}

 /*  @Output() jobNameEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  } */
}
