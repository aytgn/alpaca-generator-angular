import { Component, Input, OnInit } from '@angular/core';
import { Alpaca } from '../shared/alpaca/alpaca.interface';
import { AlpacaService } from '../shared/alpaca/alpaca.service';

@Component({
  selector: 'app-random-image',
  templateUrl: './random-image.component.html',
  styleUrls: ['./random-image.component.css'],
})
export class RandomImageComponent implements OnInit {
  constructor(private alpacaService: AlpacaService) {}
  @Input() alpaca: Alpaca | undefined;
  ngOnInit(): void {
    this.alpaca = this.alpacaService.getRandomAlpaca();
  }
}
