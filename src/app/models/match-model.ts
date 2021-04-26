import { MovementModel } from './movement-model';
import { RoundModel } from './round-model';

export class MatchModel {
    public _id: string = '';
    public winner: string = '';
    public type: string = '';
    public movements: MovementModel[] = [
        { name: 'piedra', kills: 'tijera'},
        { name: 'tijera', kills: 'papel'},
        { name: 'papel', kills: 'piedra'}
      ];
    public player_one: string = '';
    public player_two: string = '';
    public creation_date: Date = new Date();
    public rounds: RoundModel[] = [];
}
