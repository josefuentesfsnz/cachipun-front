import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public show = false;
  title: string = '';
  message: string = '';
  constructor() { }

  open(t: string, m: string) {
    this.title = t;
    this.message = m;
    this.show = true;
  }
  close() {
    this.title = '';
    this.message = '';
    this.show = false;
  }

}
