import { NgModule } from '@angular/core';
import { Page404Component } from './page-404.component';
import { PageContainerModule } from '../page-container';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    Page404Component,
  ],
  exports: [
    Page404Component,
  ],
  imports: [
    PageContainerModule,
    MatIconModule,
    RouterLink,
    MatButtonModule,
  ],
})
export class Page404Module {
}
