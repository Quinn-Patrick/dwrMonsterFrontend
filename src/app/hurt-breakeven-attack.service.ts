import { Injectable } from '@angular/core';
import { Monster } from './monster';

@Injectable({
  providedIn: 'root'
})
export class HurtBreakevenAttackService {

  constructor() { }

  computeHurtBreakevenAttack(monster: Monster): number{
    return 34 + (monster.agility/2);
  }
}
