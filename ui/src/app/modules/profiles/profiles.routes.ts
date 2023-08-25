import { Routes } from '@angular/router';
import { ProfilesListComponent, ProfilesSingleComponent } from './components';
import { ProfilesListResolver, ProfilesSingleResolver } from './resolvers';

export const profilesRoutes: Routes = [
  {
    path: '', component: ProfilesListComponent, resolve: {
      profiles: ProfilesListResolver,
    },
  },
  {
    path: ':id', component: ProfilesSingleComponent, resolve: {
      profile: ProfilesSingleResolver,
    },
  },
];
