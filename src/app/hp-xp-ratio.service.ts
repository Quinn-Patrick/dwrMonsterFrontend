import { Injectable } from '@angular/core';
import { Monster } from './monster';

@Injectable({
  providedIn: 'root'
})
export class HpXpRatioService {

  constructor() { }

  computeHpXpRatio(monster: Monster): number{
    if(monster.xp == 0) return 0;
    return (((monster.upperHp - monster.lowerHp) / 2) + monster.lowerHp) / monster.xp;
  }
}
