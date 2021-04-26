import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../service/match.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.css']
})
export class MovementComponent implements OnInit {
  weapon = new FormControl('');
  constructor(
    public matchService: MatchService
  ) {
  }

  ngOnInit(): void {
  }
  moveAdd() {
    const name: string = this.weapon.value;
    if (name.length < 1 ) return;
    if(this.matchService.get().movements.filter((m)=>{
      return m.name === name;
    }).length > 0){
      return;
    }

    this.matchService.get().movements.push({ name, kills: ''});
    this.weapon = new FormControl('');
  }
}
