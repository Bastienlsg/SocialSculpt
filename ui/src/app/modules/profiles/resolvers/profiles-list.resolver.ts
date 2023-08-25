import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Profile } from '../models';
import { Observable } from 'rxjs';
import { ProfilesService } from '../services';

@Injectable()
export class ProfilesListResolver implements Resolve<Profile[]> {
  constructor(
    private profilesService: ProfilesService,
  ) {}

  resolve(): Observable<Profile[]> {
    return this.profilesService.loadAll();
  }
}
