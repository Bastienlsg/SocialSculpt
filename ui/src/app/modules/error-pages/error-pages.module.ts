import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { errorPagesRoutes } from './error-pages.routes';
import { Page404ErrorComponent } from './components';
import { PageContainerModule } from '@ui/components';

@NgModule({
  declarations: [
    Page404ErrorComponent
  ],
  imports: [
    RouterModule.forChild(errorPagesRoutes),
    PageContainerModule
  ],
  providers: [
  ],
})
export class ErrorPagesModule {
}
