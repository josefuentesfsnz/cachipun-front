import { Component, OnInit } from '@angular/core';
import { RoundModel } from 'src/app/models/round-model';
import { MatchService } from 'src/app/service/match.service';

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
  _getMatch() {
    return this.matchService.get();
  }
  ngOnInit(): void {
  }

}
