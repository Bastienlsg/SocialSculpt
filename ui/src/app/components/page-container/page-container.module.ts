import { NgModule } from '@angular/core';
import { PageContainerComponent } from './page-container.component';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

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
  ],
})
export class PageContainerModule {
}
