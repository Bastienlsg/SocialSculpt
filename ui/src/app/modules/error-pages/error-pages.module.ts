import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as ErrorPagesComponents from './index';
import { RouterLink } from '@angular/router';
import { errorPagesRoutes } from './error-pages.routes';

@NgModule({
  declarations: [
    ErrorPagesComponents.NotFoundComponent,
    ErrorPagesComponents.ForbiddenComponent
  ],
  exports: [
    ErrorPagesComponents.NotFoundComponent,
    ErrorPagesComponents.ForbiddenComponent
  ],
  imports: [   
    RouterLink, 
    CommonModule,
    RouterModule.forChild(errorPagesRoutes)],
})
export class ErrorPagesModule {}