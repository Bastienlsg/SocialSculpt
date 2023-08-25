import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProfilesComponent } from './profile/list-profiles/list-profiles.component';
import { ProfileDetailComponent } from './profile/profile-detail/profile-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'profiles', component: ListProfilesComponent },
  { path: 'profile/:id', component: ProfileDetailComponent },
  { path: '', redirectTo: 'profiles', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
