import { Component, OnInit } from '@angular/core';
import { Alpaca } from './alpaca.interface';
import { AlpacaService } from './alpaca.service';

@Component({
  selector: 'app-alpaca',
  templateUrl: './alpaca.component.html',
  styleUrls: ['./alpaca.component.css'],
})
export class AlpacaComponent implements OnInit {
  constructor(private alpacaService: AlpacaService) {}

  alpaca: Alpaca | undefined;

  ngOnInit(): void {
    this.alpaca = this.alpacaService.getDefaultAlpaca();
    console.log(this.alpaca.eyesUrl);
  }
}
