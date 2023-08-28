import { Routes } from '@angular/router';
import { errorPagesRoutes } from './modules/error-pages/error-pages.routes';

export const routes: Routes = [
  {
    path: '', children: [
      { path: '', pathMatch: 'full', redirectTo: 'profiles' },
      { path: 'profiles', loadChildren: () => import('./modules/profiles').then(r => r.ProfilesModule) },
      ...errorPagesRoutes
    ],
  },
  { path: '**', redirectTo: '404' }
];