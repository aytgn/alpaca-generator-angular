import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomImageComponent } from './random-image.component';
import { RandomImageRoutingModule } from './random-image-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RandomImageComponent],
  imports: [CommonModule, RandomImageRoutingModule, SharedModule],
})
export class RandomImageModule {}
