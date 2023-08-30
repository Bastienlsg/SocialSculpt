import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';
import { Profile } from '../models';
import { profilesListAdapter } from './profiles.reducers';

export const profilesState = createFeatureSelector<{ list: EntityState<Profile> }>('profiles');
const { selectAll } = profilesListAdapter.getSelectors();

export namespace ProfilesSelectors {
  export const getProfiles = createSelector(
    profilesState,
    (state: { list: EntityState<Profile> }) => selectAll(state.list),
  );
}
