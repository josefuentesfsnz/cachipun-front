import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatchModel } from '../models/match-model';
import { MovementModel } from '../models/movement-model';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private match: MatchModel = new MatchModel();
  constructor(
    private clientHttp: HttpClient
  ) { }

  get(): MatchModel { 
    return this.match;
  }
  set(match: MatchModel) {
    this.match = match;
  }
  matchAddMovement(mov: MovementModel) {
    this.match.movements.push(mov);
  }
  getMovement() {
    return this.match.movements;
  }
  /**
   * busca el kills del movement entregado
   * @param move 
   * @returns kills of movement
   */
  moveKillTo(move: string): string {
    if(!move) 
      return '';
    
    const result = this.match.movements.filter( (m) => {
      return m.name === move;
    });
    if( result.length === 1 ) {
      return result[0].kills;
    }
    return '';
  }

  save(match: MatchModel) {
    return this.clientHttp.post( `${ environment.APIURL }/match`, match);
    // return this.clientHttp.put( `${ environment.APIURL }/match?id=${ match.id }`, match);
  }
}
