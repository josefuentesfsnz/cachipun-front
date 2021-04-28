import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/service/alert.service';
import { RoundModel } from '../../models/round-model';
import { MatchService } from '../../service/match.service';
import { SelectMovementComponent } from './select-movement/select-movement.component';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @ViewChild('playerOne') player1!: SelectMovementComponent;
  @ViewChild('playerTwo') player2!: SelectMovementComponent;
  public round: RoundModel = new RoundModel();
  public isSelecting: boolean = false;
  constructor(
    public matchService: MatchService,
    private alertService: AlertService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  someoneSelecting(event: any) {
    if (event === 'player_one') {
      this.player2.isblocked = true;
    }
    if (event === 'player_two') {
      this.player1.isblocked = true;
    }
    
    this.isSelecting = event;
  }

  selectedOption(event: any) {
    if (event.player === 'player_two') {
      this.player1.isblocked = false;
    }
    if (event.player === 'player_one') {
      this.player2.isblocked = false;
    }
    const rnd: any = this.round;
    rnd[`${event.player}_move`] = event.movement;
    this.checkWinner();
  }
  checkWinner() {
    // si ambos jugadores ya selecconaron 
    if (this.round.player_one_move.length < 2 || this.round.player_two_move.length < 2) {
      return;
    }
    if (this.matchService.moveKillTo(this.round.player_one_move) !== this.round.player_two_move
      && this.matchService.moveKillTo(this.round.player_two_move) !== this.round.player_one_move) {
        this.round.winner_player = 'DRAW';
        this.alertService.open('RESULT', 'DRAW');
    }
    //player 1 win
    if (this.matchService.moveKillTo(this.round.player_one_move) === this.round.player_two_move) {
      this.alertService.open('WINNER',`${ this.matchService.get().player_one } WIN!`);
      this.round.winner_player = 'player_one';
      this.round.winner_name = this.matchService.get().player_one;
    }
    //player 2 win
    if (this.matchService.moveKillTo(this.round.player_two_move) === this.round.player_one_move) {
      this.alertService.open('WINNER',`${ this.matchService.get().player_two } WIN!`);
      this.round.winner_player = 'player_two';
      this.round.winner_name = this.matchService.get().player_two;
    }
    this.matchService.get().rounds.push(this.round);
    this.round = new RoundModel();
    this.restarSelects();
  }
  restarSelects() {
    this.player1.restart();
    this.player2.restart();
  }
  endGame(){
    if(this.matchService.get().rounds.length < 1 ){
      return;
    }
    this.matchService.save(this.matchService.get()).subscribe(data => {
      console.log(data);
      this.router.navigate(['/game/result']);
    });
  }
}
