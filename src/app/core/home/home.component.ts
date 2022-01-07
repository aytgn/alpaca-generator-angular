import { Component, OnInit } from '@angular/core';
import { Alpaca } from 'src/app/shared/alpaca/alpaca.interface';
import { AlpacaService } from 'src/app/shared/alpaca/alpaca.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private alpacaService: AlpacaService) {}

  alpaca: Alpaca | undefined;
  ngOnInit(): void {
    this.alpaca = this.alpacaService.getDefaultAlpaca();
  }
}
