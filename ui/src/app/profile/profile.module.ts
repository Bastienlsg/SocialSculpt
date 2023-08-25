import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ListProfilesComponent } from './list-profiles/list-profiles.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';

const profileRoutes: Routes = [
  { path: 'profiles', component: ListProfilesComponent },
  { path: 'profile/:id', component: ProfileDetailComponent },
];


@NgModule({
  declarations: [
    ListProfilesComponent,
    ProfileDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(profileRoutes)
  ]
})
export class ProfileModule { }
