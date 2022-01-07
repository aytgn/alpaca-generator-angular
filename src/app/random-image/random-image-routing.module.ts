import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomImageComponent } from './random-image.component';

const routes: Routes = [{ path: '', component: RandomImageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomImageRoutingModule {}
