import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatchService } from '../../../service/match.service';

@Component({
  selector: 'app-select-movement',
  templateUrl: './select-movement.component.html',
  styleUrls: ['./select-movement.component.css']
})
export class SelectMovementComponent implements OnInit {
  @Input() isblocked: boolean = false;// bloquea la tarjeta
  @Input() player: string = '';

  @Output() selectInit: EventEmitter<boolean> = new EventEmitter();
  @Output() moveSelected: EventEmitter<string> = new EventEmitter();
  public playerName: string = '';
  public selecting: boolean = false;
  
  constructor(
    public matchService: MatchService
  ) { }

  ngOnInit(): void {
    const playerTemp: any = this.matchService.match;
    this.playerName = playerTemp[this.player];
  }
  iniciar(): void {
    this.selectInit.emit(true);
    this.selecting = true;
  }
  seleccionar(moveName: string): void {
    this.moveSelected.emit('');
  }
}
