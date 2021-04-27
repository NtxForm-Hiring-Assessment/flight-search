
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { FlightsService } from '../services/flights/flights.service';
 
@Injectable()
export class FlightsEffects {
 
  loadFlights$ = createEffect(() => this.actions$.pipe(
    ofType('[Flights Page] Load Flights'),
    mergeMap((filters) => this.flightsService.getAll(filters)
      .pipe(
        map(flights => ({ type: '[Flights API] Flights Loaded Success', flights })),
        catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private flightsService: FlightsService
  ) {}
}