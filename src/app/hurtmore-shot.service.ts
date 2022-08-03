import { Injectable } from '@angular/core';
import { Monster } from './monster';

@Injectable({
  providedIn: 'root'
})
export class HurtmoreShotService {

  constructor() { }

  computeHurtmore(monster: Monster): number{
    let sumOfOutcomes: number = 0;
    let hurtmoreDamageArray: number[] = [65, 64, 63, 62, 61, 60, 59, 58];
    for(let i of hurtmoreDamageArray){
      sumOfOutcomes += this.computeSingleOutcome(+i, monster);
    }
    let hurtmoreShot: number = sumOfOutcomes * (1/8) * (1 - monster.hurtResistance);
    return hurtmoreShot;
  }

  computeHurt(monster: Monster): number{
    let sumOfOutcomes: number = 0;
    let hurtDamageArray: number[] = [16, 15, 14, 13, 12, 11, 10, 9];
    for(let i of hurtDamageArray){
      sumOfOutcomes += this.computeSingleOutcome(+i, monster);
    }
    console.log(sumOfOutcomes);
    let hurtmoreShot: number = sumOfOutcomes * (1/8) * (1 - monster.hurtResistance);
    return hurtmoreShot;
  }

  computeSingleOutcome(hurtDamage: number, monster: Monster): number{
    let outcome: number = hurtDamage - monster.lowerHp + 1;
    
    let range: number = monster.upperHp - monster.lowerHp + 1;
    
    if(outcome > range){
      outcome = range;
    }
    else if(outcome < 0){
      outcome = 0;
    }
    return outcome / range;
  }
}
