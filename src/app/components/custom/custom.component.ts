import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../service/match.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  data: any;
  constructor(
    private matchService: MatchService
  ) {
    this.data = this.matchService.get();
   }

  ngOnInit(): void {
  }

}
