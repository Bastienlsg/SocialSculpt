import { createAction, props } from '@ngrx/store';
import { Profile } from '../models';

export namespace ProfilesActions {
  export const loadAll = createAction(
    '[profiles] load all',
  );

  export const loadAllSuccess = createAction(
    '[profiles] load all success',
    props<{ items: Profile[] }>(),
  );
}
