import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Profile } from '../models';
import { ProfilesService } from '../services';

export const profilesSingleResolver: ResolveFn<Profile> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const id = route.paramMap.get('id');
  const service = inject(ProfilesService);
  return service.loadSingle(id || '');
};
