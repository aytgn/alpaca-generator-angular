import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomImageComponent } from './random-image.component';
import { RandomImageRoutingModule } from './random-image-routing.module';

@NgModule({
  declarations: [RandomImageComponent],
  imports: [CommonModule, RandomImageRoutingModule],
})
export class RandomImageModule {}
