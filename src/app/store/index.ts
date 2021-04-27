import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { IAppState } from './app.interface';
import { AppReducer } from './app.reducer';

export const reducers: ActionReducerMap<IAppState> = {
  AppState: AppReducer,
};
export const metaReducers: MetaReducer<IAppState>[] = [];

export const selectFeature = (state: IAppState) => state;

export const selectFeatureCount = createSelector(
  selectFeature,
  (state: IAppState) => state.AppState.flights
);