import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Profile } from '../models';
import { ProfilesFacade } from '../+state';
import { map } from 'rxjs';

export const profilesListResolver: ResolveFn<Profile[]> = () => {
  const profilesFacade = inject(ProfilesFacade);
  profilesFacade.loadAll();
  return profilesFacade.loadAllSuccess$.pipe(
    map(({ items }) => items),
  );
};
