import { Routes } from '@angular/router';
import { Page404Component } from '@ui/components';

export const routes: Routes = [
  {
    path: '', children: [
      { path: '', pathMatch: 'full', redirectTo: 'profiles' },
      { path: 'profiles', loadChildren: () => import('./modules/profiles').then(r => r.ProfilesModule) },
    ],
  },
  { path: '**', component: Page404Component },
];
