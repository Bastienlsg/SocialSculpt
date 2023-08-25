import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { profilesRoutes } from './profiles.routes';
import { ProfilesListComponent, ProfilesSingleComponent } from './components';
import { ProfilesService } from './services';
import { PageContainerModule } from '../../components';
import { ProfilesListResolver, ProfilesSingleResolver } from './resolvers';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';

@NgModule({
  declarations: [
    ProfilesListComponent,
    ProfilesSingleComponent,
  ],
  imports: [
    RouterModule.forChild(profilesRoutes),
    PageContainerModule,
    NgIf,
    AsyncPipe,
    NgForOf,
  ],
  providers: [
    ProfilesService,
    ProfilesListResolver,
    ProfilesSingleResolver,
  ],
})
export class ProfilesModule {
}
