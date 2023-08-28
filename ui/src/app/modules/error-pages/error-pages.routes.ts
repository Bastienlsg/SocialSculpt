import { Routes } from '@angular/router';
import * as ErrorPagesComponents from './index';

export const errorPagesRoutes: Routes = [
  { path: '**', component: ErrorPagesComponents.NotFoundComponent },
  { path: '403', component: ErrorPagesComponents.ForbiddenComponent },
];