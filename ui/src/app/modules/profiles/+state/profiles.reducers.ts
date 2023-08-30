import { createEntityAdapter } from '@ngrx/entity';
import { Profile } from '../models';
import { createReducer, on } from '@ngrx/store';
import { ProfilesActions } from './profiles.actions';

export const profilesListAdapter = createEntityAdapter<Profile>();

export const profilesListReducer = createReducer(profilesListAdapter.getInitialState(),
  on(ProfilesActions.loadAllSuccess, (state, { items }) => {
    return profilesListAdapter.setAll(items, state);
  }),
);

export const profilesSingleReducer = createReducer(null);
