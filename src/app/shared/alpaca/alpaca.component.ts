import { Component, Input, OnInit } from '@angular/core';
import { Alpaca } from './alpaca.interface';

@Component({
  selector: 'app-alpaca',
  templateUrl: './alpaca.component.html',
  styleUrls: ['./alpaca.component.css'],
})
export class AlpacaComponent implements OnInit {
  constructor() {}
  @Input() alpaca: Alpaca | undefined;

  ngOnInit(): void {}
}
