import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Monster } from '../monster';
import { MonsterService } from '../monster.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-monster-details',
  templateUrl: './monster-details.component.html',
  styleUrls: ['./monster-details.component.css']
})
export class MonsterDetailsComponent implements OnInit {
  @Input() monster?: Monster;

  constructor(
    private route: ActivatedRoute,
    private monsterService: MonsterService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getMonster();
  }

  getMonster(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.monsterService.getMonster(id)
    .subscribe(monster => {
      this.monster = monster;
      this.monsterService.setDerivedValues(monster);
    });
  }

  goBack(): void{
    this.location.back();
  }
}
