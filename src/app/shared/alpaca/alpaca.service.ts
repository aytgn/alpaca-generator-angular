import { Injectable } from '@angular/core';
import { Alpaca } from './alpaca.interface';

@Injectable()
export class AlpacaService {
  constructor() {}

  //Alpaca
  private _alpaca: Alpaca | undefined;

  //alpaca properties

  getDefaultAlpaca() {
    this._alpaca = {
      eyesUrl: '../../assets/eyes/default.png',
      earsUrl: '../../assets/ears/default.png',
      hairUrl: '../../assets/hair/default.png',
      legUrl: '',
      mouthUrl: '../../assets/mouth/default.png',
      neckUrl: '../../assets/neck/default.png',
      accessoriesUrl: '',
      name: 'default',
      backgroundUrl: '',
    };
    return this._alpaca;
  }
}
