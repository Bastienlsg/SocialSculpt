import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProfilesActions, ProfilesSelectors } from '@ui/modules';
import { Actions, ofType } from '@ngrx/effects';

@Injectable()
export class ProfilesFacade {
  readonly loadAllSuccess$ = this.actions$.pipe(
    ofType(ProfilesActions.loadAllSuccess),
  );

  readonly profiles$ = this.store.select(
    ProfilesSelectors.getProfiles,
  );

  constructor(
    private store: Store,
    private actions$: Actions,
  ) {}

  loadAll(): void {
    this.store.dispatch(
      ProfilesActions.loadAll(),
    );
  }
}
