import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AlertService } from 'src/app/service/alert.service';
import { MatchService } from '../../../service/match.service';

@Component({
  selector: 'app-select-movement',
  templateUrl: './select-movement.component.html',
  styleUrls: ['./select-movement.component.css']
})
export class SelectMovementComponent implements OnInit {
  isblocked: boolean = false;// bloquea la tarjeta
  public playerName: string = '';
  public selecting: boolean = false;

  @Input() player: string = '';

  @Output() selectInit: EventEmitter<any> = new EventEmitter();
  @Output() moveSelected: EventEmitter<any> = new EventEmitter();
  
  constructor(
    public matchService: MatchService
  ) { }

  ngOnInit(): void {
    const playerTemp: any = this.matchService.get();
    this.playerName = playerTemp[this.player];
  }
  iniciar(): void {
    this.selectInit.emit(this.player);
    this.selecting = true;
  }
  seleccionar(moveName: string): void {
    this.isblocked = true;
    this.moveSelected.emit({
        player: this.player,
        movement: moveName
      });
  }
  bloquear() {
    this.isblocked = true;
  }
  restart() {
    this.isblocked = false;// bloquea la tarjeta
    this.playerName = '';
    this.selecting = false;
  }
}
