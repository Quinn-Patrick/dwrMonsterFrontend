import { Injectable } from '@angular/core';
import { Monster } from './monster';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HurtmoreShotService } from './hurtmore-shot.service';
import { AttackRangeService } from './attack-range.service';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  private monsterUrl = "http://localhost:8080/api";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private hurtmoreShot: HurtmoreShotService, private attackRanges: AttackRangeService) { }

  getMonsters(): Observable<Monster[]>{
    return this.http.get<Monster[]>(this.monsterUrl + '/monsters').pipe(
      tap(_ => this.log(`fetched monsters`)),
      catchError(this.handleError<Monster[]>('getMonsters', []))
    );
  }

  getMonster(id: number): Observable<Monster>{
    const url = `${this.monsterUrl}/monster/${id}`;
    return this.http.get<Monster>(url).pipe(
      tap(_ => this.log(`fetched monster with id ${id}`)),
      catchError(this.handleError<Monster>(`getMonster id=${id}`))
    );
  }

  //Returns a random monster, but cannot return the dragonlord in either form.
  getRandomMonster(): Observable<Monster>{
    return this.getMonster(Math.floor(Math.random() * 38) + 1);
  }

  setDerivedValues(monster: Monster): void{
    monster.hurtShot = this.hurtmoreShot.computeHurt(monster);
    monster.hurtmoreShot = this.hurtmoreShot.computeHurtmore(monster);
    monster.threeShotLower = this.attackRanges.computeLowerAttack(3, monster);
    monster.threeShotUpper = this.attackRanges.computeUpperAttack(3, monster);

    monster.twoShotLower = this.attackRanges.computeLowerAttack(2, monster);
    monster.twoShotUpper = this.attackRanges.computeUpperAttack(2, monster);

    monster.oneShotLower = this.attackRanges.computeLowerAttack(1, monster);
    monster.oneShotUpper = this.attackRanges.computeUpperAttack(1, monster);
  }

  private log(message: string){
    console.log(message);
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error:any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }
}
