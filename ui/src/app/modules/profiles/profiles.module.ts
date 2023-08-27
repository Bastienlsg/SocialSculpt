import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { profilesRoutes } from './profiles.routes';
import { ProfilesListComponent, ProfilesSingleComponent } from './components';
import { ProfilesService } from './services';
import { PageContainerModule } from '@ui/components';
import { ProfilesListResolver, ProfilesSingleResolver } from './resolvers';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

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
    MatTableModule,
  ],
  providers: [
    ProfilesService,
    ProfilesListResolver,
    ProfilesSingleResolver,
  ],
})
export class ProfilesModule {
}
