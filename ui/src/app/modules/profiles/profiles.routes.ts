import { Routes } from '@angular/router';
import { ProfilesListComponent, ProfilesSingleComponent } from './components';
import { profilesListResolver, profilesSingleResolver } from './resolvers';

export const profilesRoutes: Routes = [
  {
    path: '', component: ProfilesListComponent, resolve: {
      profiles: profilesListResolver,
    },
  },
  {
    path: ':id', component: ProfilesSingleComponent, resolve: {
      profile: profilesSingleResolver,
    },
  },
];
