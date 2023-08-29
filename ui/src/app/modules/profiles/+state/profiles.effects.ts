import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProfilesActions } from './profiles.actions';
import { ProfilesService } from '../services';
import { exhaustMap, map } from 'rxjs';

@Injectable()
export class ProfilesEffects {
  readonly loadAll$ = createEffect(() => this.actions$.pipe(
    ofType(ProfilesActions.loadAll),
    exhaustMap(() => this.profilesService.loadAll().pipe(
      map(items => ProfilesActions.loadAllSuccess({ items })),
    )),
  ));

  constructor(
    private actions$: Actions,
    private profilesService: ProfilesService,
  ) {}
}
