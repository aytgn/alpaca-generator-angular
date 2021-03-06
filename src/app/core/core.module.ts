import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, HomeComponent],
  providers: [],
  imports: [CommonModule, SharedModule],
  exports: [CommonModule, NavbarComponent, FooterComponent, HomeComponent],
})
export class CoreModule {}
