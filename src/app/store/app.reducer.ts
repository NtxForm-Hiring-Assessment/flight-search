import { createReducer, on, Action } from '@ngrx/store';
import { initialAppState, IApp } from './app.interface';
import { flightsLoaded, loadFlights } from './app.actions';

export const userFeatureKey = 'AppState';

export const reducer = createReducer(
  initialAppState as IApp,
  on(loadFlights, (state) => {
      return {
          ...state,
      }
  }),
  on(flightsLoaded, (state, {flights}) => {
      return {
          ...state,
          flights
      }
  }),
);

export function AppReducer(state: IApp, action: Action): IApp {
  return reducer(state, action);
}