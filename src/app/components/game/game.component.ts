import { Component, OnInit } from '@angular/core';
import { RoundModel } from '../../models/round-model';
import { MatchService } from '../../service/match.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public round: RoundModel = new RoundModel();
  public isSelecting: boolean = false;
  public player_one_ok: boolean = false;
  public player_two_ok: boolean = false;
  constructor(
    public matchService: MatchService
  ) {
  }

  ngOnInit(): void {
  }

  someoneSelecting( event: any) {
    this.isSelecting = event;
  }
  selectedOption(event:any) {
    console.log(event);
  }
}
