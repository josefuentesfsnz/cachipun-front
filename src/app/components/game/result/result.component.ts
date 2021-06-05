import { Component, OnInit } from '@angular/core';
import { RoundModel } from 'src/app/models/round-model';
import { MatchService } from 'src/app/service/match.service';
export interface Iwinners {
  player_name: string;
  player: string;
}
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  rounds: RoundModel[] = [];
  constructor(
    private matchService: MatchService
  ) {
    this.rounds = this.matchService.get().rounds;
  }
  _getWinnerParty(): Iwinners {
    let winner: Iwinners = {
      player_name: "Nadie", 
      player: "DRAW"
    };
    const pl1wins = this.rounds.filter(d => {
      return d.winner_player === "player_one";
    });
    const pl2wins = this.rounds.filter(d => {
      return d.winner_player === "player_two";
    });
    if (pl1wins.length === pl2wins.length) {
      winner.player_name = "EMPATE";
      winner.player = "DRAW";
    }
    if (pl1wins.length > pl2wins.length) {
      winner.player_name = pl1wins[0].winner_name;
      winner.player = "player_one";
    }
    if (pl1wins.length < pl2wins.length) {
      winner.player_name = pl2wins[0].winner_name;
      winner.player = "player_two";
    }
    return winner;
  }
  _getMatch() {
    return this.matchService.get();
  }
  ngOnInit(): void {
  }

}
