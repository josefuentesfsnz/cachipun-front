import { Injectable } from '@angular/core';
import { MatchModel } from '../models/match-model';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  public match: MatchModel = new MatchModel();
  constructor() { }
}
