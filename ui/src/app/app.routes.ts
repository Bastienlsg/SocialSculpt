import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', children: [
      { path: '', pathMatch: 'full', redirectTo: 'profiles' },
      { path: 'profiles', loadChildren: () => import('./modules/profiles').then(r => r.ProfilesModule) },
    ],
  },
  { path: '**', redirectTo: '' },
];
