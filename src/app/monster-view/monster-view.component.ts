import { Component, OnInit } from '@angular/core';
import { Monster } from '../monster';
import { MonsterService } from '../monster.service';

@Component({
  selector: 'app-monster-view',
  templateUrl: './monster-view.component.html',
  styleUrls: ['./monster-view.component.css']
})
export class MonsterViewComponent implements OnInit {
  monsters: Monster[] = [];

  getMonsters(): void{
    this.monsterService.getMonsters().subscribe(monsters => this.monsters = monsters);
  }

  constructor(private monsterService: MonsterService) { }

  ngOnInit(): void {
    this.getMonsters();
  }

}
