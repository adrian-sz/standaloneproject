import { Component, OnInit } from '@angular/core';
import { Jobs } from '../db/jobs';
import { Items } from '../db/items';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-character-stats',
  standalone: true,
  imports: [],
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

  //jobs : Observable<Jobs[]>

  constructor() {}

  ngOnInit(): void {

  }
}
