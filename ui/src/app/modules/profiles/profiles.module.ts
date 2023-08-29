import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { profilesRoutes } from './profiles.routes';
import { ProfilesListComponent, ProfilesSingleComponent } from './components';
import { ProfilesService } from './services';
import { PageContainerModule } from '@ui/components';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { StoreModule } from '@ngrx/store';
import { ProfilesEffects, ProfilesFacade, profilesListReducer, profilesSingleReducer } from './+state';
import { EffectsModule } from '@ngrx/effects';

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
    StoreModule.forFeature('profiles', {
      list: profilesListReducer,
      current: profilesSingleReducer,
    }),
    EffectsModule.forFeature(ProfilesEffects),
  ],
  providers: [
    ProfilesService,
    ProfilesFacade,
  ],
})
export class ProfilesModule {
}
