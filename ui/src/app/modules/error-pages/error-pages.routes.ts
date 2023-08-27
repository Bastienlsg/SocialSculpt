import { Routes } from '@angular/router';
import { Page404ErrorComponent } from './components';

export const errorPagesRoutes: Routes = [
  {
    path: '404-error', component: Page404ErrorComponent
  }
];
