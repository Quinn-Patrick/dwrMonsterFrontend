import { Injectable } from '@angular/core';
import { Monster } from './monster';

@Injectable({
  providedIn: 'root'
})
export class AttackRangeService {

  constructor() { }

  computeLowerAttack(numberOfAttacks: number, monster: Monster): number{
    return 2 * Math.ceil((monster.lowerHp / numberOfAttacks)) + Math.floor(monster.agility / 2)
  }

  computeUpperAttack(numberOfAttacks: number, monster: Monster): number{
    return 4 * Math.ceil((monster.upperHp / numberOfAttacks)) + Math.floor(monster.agility / 2)
  }
}
