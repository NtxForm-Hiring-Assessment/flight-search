import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISearchFlightFilters, ISearchFlightResults } from 'src/app/models/flight.model';
import { WebApiService } from '../web-api/web-api.service';

@Injectable({
    providedIn: 'root'
  })
  export class FlightsService {
    constructor (private _webApiService: WebApiService) {}
  
    getAll(filetrs: ISearchFlightFilters): Observable<ISearchFlightResults[]> {
      console.log("getAll", filetrs);
      const url = `flight?DepartureAirportCode=${filetrs.DepartureAirportCode}&ArrivalAirportCode=${filetrs.ArrivalAirportCode}&DepartureDate=${filetrs.DepartureDate}&ReturnDate=${filetrs.ReturnDate}`;
      return this._webApiService.get<ISearchFlightResults[]>(url);
    }
  }