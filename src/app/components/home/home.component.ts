import { Component, OnInit } from '@angular/core';
import { MatchModel } from '../../models/match-model';
import { MatchService } from '../../service/match.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    public matchService: MatchService
    ) { }

  ngOnInit(): void {
    this.matchService.match.player_one = '';
    this.matchService.match.player_two = '';
  }
  player1( name: any ): void {
    this.matchService.match.player_one = name;
  }
  player2( name: any ): void {
    this.matchService.match.player_two = name;
  }
  playerIsValid() {
    return this.matchService.match.player_one.length > 1 && this.matchService.match.player_two.length > 1;
  }
}
