import { NgModule } from '@angular/core';
import { PageContainerComponent } from './page-container.component';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    PageContainerComponent,
  ],
  exports: [
    PageContainerComponent,
  ],
  imports: [
    RouterLink,
    NgIf,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class PageContainerModule {
}
