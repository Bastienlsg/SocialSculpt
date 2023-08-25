import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Profile } from '../models';
import { Observable } from 'rxjs';
import { ProfilesService } from '../services';

@Injectable()
export class ProfilesSingleResolver implements Resolve<Profile> {
  constructor(
    private profilesService: ProfilesService,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Profile> {
    const id = route.paramMap.get('id');
    return this.profilesService.loadSingle(id || '');
  }
}
