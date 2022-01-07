import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlpacaComponent } from './alpaca/alpaca.component';
import { AlpacaService } from './alpaca/alpaca.service';

@NgModule({
  declarations: [AlpacaComponent],
  providers: [AlpacaService],
  imports: [CommonModule],
  exports: [AlpacaComponent],
})
export class SharedModule {}
