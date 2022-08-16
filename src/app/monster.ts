import { NumberValueAccessor } from "@angular/forms";

export interface Monster{
    id: number;
    name: string;
    lowerHp: number;
    upperHp: number;
    strength: number;
    agility: number;
    xp: number;
    gold: number;
    hurtResistance: number;
    sleepResistance: number;
    evasion: number;
    runStrength: number;
    hurtShot: number;
    hurtBreakevenAttack: number;
    runGroup: number;
    fiftyPercentRunAgility: number;
    seventyFivePercentRunAgility: number;
    sleepInsteadOfRunAgility: number;
    threeShotLower: number;
    threeShotUpper: number;
    twoShotLower: number;
    twoShotUpper: number;
    oneShotLower: number;
    oneShotUpper: number;
    twentyFivePercentAmbushAgility: number;
    stopspellCap: number;
    hurtmoreShot: number;
    brokenCap: number;
    hpXpRatio: number;

}