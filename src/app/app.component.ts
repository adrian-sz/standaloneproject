import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CharactermixComponent } from './charactermix/charactermix.component';
import { ItemmixComponent } from './itemmix/itemmix.component';
import { HeadmixComponent } from './headmix/headmix.component';
import { BodymixComponent } from './bodymix/bodymix.component';
import { RacesmixComponent } from './racesmix/racesmix.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HandmixComponent } from './handmix/handmix.component';
import { LegmixComponent } from './legmix/legmix.component';
import { FootmixComponent } from './footmix/footmix.component';
import { EarringmixComponent } from './earringmix/earringmix.component';
import { NecklacemixComponent } from './necklacemix/necklacemix.component';
import { BraceletmixComponent } from './braceletmix/braceletmix.component';
import { LeftringmixComponent } from './leftringmix/leftringmix.component';
import { RightringmixComponent } from './rightringmix/rightringmix.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuComponent,
    CharactermixComponent,
    ItemmixComponent,
    HeadmixComponent,
    BodymixComponent,
    RacesmixComponent,
    HandmixComponent,
    LegmixComponent,
    FootmixComponent,
    EarringmixComponent,
    NecklacemixComponent,
    BraceletmixComponent,
    LeftringmixComponent,
    RightringmixComponent,
    CalculatorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'standaloneproject';
}
