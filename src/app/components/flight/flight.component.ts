import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectFeatureCount } from '../../store';
import { IAppState } from '../../store/app.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ISearchFlightFilters } from '../../models/flight.model';
import { loadFlights } from '../../store/app.actions';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {
  public flights = null;
  public _form: FormGroup;
  // private today = _moment(new Date() , "DD/MM/YYYY").format("DD/MM/YYYY");
  private convertedFormValues: ISearchFlightFilters;

  constructor(private __fb: FormBuilder, private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.store.select(selectFeatureCount).subscribe(flight => {
      console.log("my-selector", flight);
      this.flights = flight;
  })

  this.__buildForm(); 
  }

  public onSubmit(): void {
    if (this._form.invalid) return;
    this.store.dispatch(loadFlights({filter: this.convertedFormValues}));
  }

  public get formIsValid(): boolean {
    return this._form.valid;
  }

  public getError(formControlName): string {
    const error = this._form.get(formControlName).errors;
    if (!error) return "";
    let errorMessage = "This field is required!"
    if (formControlName === "departure" || formControlName === "arrival") {
      if (error.minlength) errorMessage = `Should be ${error?.minlength?.requiredLength} characters`;
    }
    return errorMessage;
  }

  private __buildForm(): void {
		this._form = this.__fb.group({
			departure: ["", [Validators.required, Validators.minLength(3)]],
			arrival: ["", [Validators.required, Validators.minLength(3)]],
			date: ["", [Validators.required]],
			returnDate: ["", [Validators.required]],
		});

    this.subscribeToFormValueChanegs();
  }

  private subscribeToFormValueChanegs(): void {
    this._form.valueChanges.pipe(debounceTime(200)).subscribe(formValues => {
      this.convertedFormValues = {
        DepartureAirportCode: formValues.departure,
        ArrivalAirportCode: formValues.arrival,
        DepartureDate: formValues.date,
        ReturnDate: formValues.returnDate,
      };
    })
  }

}
