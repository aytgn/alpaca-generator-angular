import { Injectable } from '@angular/core';
import { Alpaca } from './alpaca.interface';

@Injectable()
export class AlpacaService {
  constructor() {}

  //Alpaca
  getDefaultAlpaca() {
    const alpaca: Alpaca = {
      eyesUrl: '../../assets/eyes/default.png',
      earsUrl: '../../assets/ears/default.png',
      hairUrl: '../../assets/hair/default.png',
      legUrl: '../../assets/leg/default.png',
      mouthUrl: '../../assets/mouth/default.png',
      neckUrl: '../../assets/neck/default.png',
      accessoriesUrl: '../../assets/accessories/headphone.png',
      name: 'default',
      noseUrl: '../../assets/nose.png',
      backgroundUrl: '../../assets/backgrounds/blue50.png',
    };
    return alpaca;
  }
  getRandomAlpaca(): Alpaca {
    const r1 = Math.random();
    const r2 = Math.random();
    const r3 = Math.random();
    const r4 = Math.random();
    const r5 = Math.random();
    const r6 = Math.random();
    const r7 = Math.random();
    const r8 = Math.random();

    let eyes = 'default';
    let ears = 'default';
    let hair = 'default';
    let leg = 'default';
    let mouth = 'default';
    let neck = 'default';
    let accessories = 'headphone';
    let bg = 'blue50';

    if (r1 > 0.2) eyes = 'angry';
    if (r1 > 0.4) eyes = 'naughty';
    if (r1 > 0.6) eyes = 'panda';
    if (r1 > 0.8) eyes = 'smart';
    if (r1 > 0.9) eyes = 'star';

    if (r2 > 0.33) ears = 'tilt-backward';
    if (r2 > 0.66) ears = 'tilt-forward';

    if (r3 > 0.15) hair = 'bang';
    if (r3 > 0.3) hair = 'curls';
    if (r3 > 0.45) hair = 'elegant';
    if (r3 > 0.6) hair = 'fancy';
    if (r3 > 0.75) hair = 'quiff';
    if (r3 > 0.9) hair = 'short';

    if (r4 > 0.2) leg = 'bubble-tea';
    if (r4 > 0.4) leg = 'cookie';
    if (r4 > 0.6) leg = 'game-console';
    if (r4 > 0.8) leg = 'tilt-backward';
    if (r4 > 0.9) leg = 'tilt-forward';

    if (r5 > 0.2) mouth = 'astonished';
    if (r5 > 0.4) mouth = 'eating';
    if (r5 > 0.6) mouth = 'laugh';
    if (r5 > 0.8) mouth = 'tongue';

    if (r6 > 0.25) neck = 'bend-backward';
    if (r6 > 0.5) neck = 'bend-forward';
    if (r6 > 0.75) neck = 'thick';

    if (r7 > 0.25) accessories = 'earings';
    if (r7 > 0.5) accessories = 'flower';
    if (r7 > 0.75) accessories = 'glasses';

    if (r8 > 0.18) bg = 'darkblue50';
    if (r8 > 0.33) bg = 'green50';
    if (r8 > 0.49) bg = 'grey40';
    if (r8 > 0.65) bg = 'red50';
    if (r8 > 80) bg = 'yellow50';

    const alpaca: Alpaca = {
      eyesUrl: `../../assets/eyes/${eyes}.png`,
      earsUrl: `../../assets/ears/${ears}.png`,
      hairUrl: `../../assets/hair/${hair}.png`,
      legUrl: `../../assets/leg/${leg}.png`,
      mouthUrl: `../../assets/mouth/${mouth}.png`,
      neckUrl: `../../assets/neck/${neck}.png`,
      accessoriesUrl: `../../assets/accessories/${accessories}.png`,
      noseUrl: `../../assets/nose.png`,
      backgroundUrl: `../../assets/backgrounds/${bg}.png`,
    };
    return alpaca;
  }

  //Helpers
  randomAsset() {}
}
