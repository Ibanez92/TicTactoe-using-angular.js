import { Input } from '@angular/core';
import { Component} from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton hero status="primary" *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
    <button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; outline: 0 !important; box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important; }']
})
export class SquareComponent{

  // constructor() { }
 
    @Input() value: 'X' | 'O'
  

}
