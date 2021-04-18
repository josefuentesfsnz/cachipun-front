import { Component, Input, OnInit } from '@angular/core';
import { MatchModel } from 'src/app/models/match-model';
import { MatchService } from '../../../service/match.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() public move:any = {};
  constructor(
    public matchService: MatchService
  ) {
    
  }

  ngOnInit(): void {
  }
  
  moveRemove(){
    this.matchService.match.movements = this.matchService.match.movements.filter((m) => {
      if(this.move.name === m.name){
        return false;
      }
      return true;
    });
  }
  /**
   * retorna las opciones disponibles 
   */
  _optFilter() {
    return this.matchService.match.movements.filter((m) => {
      if(this.move.name === m.name){
        return false;
      }
      return true;
    });
  }
}
