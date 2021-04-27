import { ISearchFlightResults } from '../models/flight.model';

export interface IApp {
    flights: ISearchFlightResults[];
  }
  
  export interface IAppState {
    AppState: IApp;
  }
  
  export const initialAppState: IApp = {
    flights: null
  };