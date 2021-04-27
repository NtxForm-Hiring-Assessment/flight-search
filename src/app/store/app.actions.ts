import { createAction, props } from '@ngrx/store';
import { ISearchFlightFilters, ISearchFlightResults } from '../models/flight.model';


export const loadFlights = createAction(
  '[Flights Page] Load Flights',
  props<{filter: ISearchFlightFilters}>()
);

export const flightsLoaded = createAction(
  '[Flights API] Flights Loaded Success',
  props<{ flights: ISearchFlightResults[] }>()
);