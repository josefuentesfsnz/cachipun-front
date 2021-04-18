export class MatchModel {
    public id: string = '';
    public winner: string = '';
    public type: string = '';
    public movements: any[] = [
        { name: 'piedra', kills: 'tijera'},
        { name: 'tijera', kills: 'papel'},
        { name: 'papel', kills: 'piedra'}
      ];
    public player_one: string = '';
    public player_two: string = '';
    public creation_date: Date = new Date();
    public rounds: any[] = [];
}
