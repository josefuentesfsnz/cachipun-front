import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-playerbox',
  templateUrl: './playerbox.component.html',
  styleUrls: ['./playerbox.component.css']
})
export class PlayerboxComponent implements OnInit {
  @Input() numero: number = 0;
  @Output() player_name: EventEmitter<string> = new EventEmitter();
  name = new FormControl('');

  constructor(
  ) {
    this.name = new FormControl('',[
      Validators.required,
      Validators.minLength(2)]);
  }

  ngOnInit(): void {
    this.name = new FormControl('',[
      Validators.required,
      Validators.minLength(2)]);
    this.name.valueChanges
    .subscribe((value) => {
      this.player_name.emit(value);
    });
  }
}
