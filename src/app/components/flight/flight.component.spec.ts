import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { FlightComponent } from './flight.component';

describe('FlightComponent', () => {
    let component: FlightComponent;
    let fixture: ComponentFixture<FlightComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, FormsModule, StoreModule.forRoot({})],
            declarations: [ FlightComponent ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            })
            .compileComponents();
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(FlightComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
            component.ngOnInit();
            });

      
  it('form invalid when empty', () => {
    expect(component._form.valid).toBeFalsy();
  });

  it('departure field validity', () => {
    let departure = component._form.controls['departure'];
    expect(departure.valid).toBeFalsy(); (2)
  });

  it('departure field validity', () => {
    let errors = {};
    let departure = component._form.controls['departure'];
    errors = departure.errors || {};
    expect(errors['required']).toBeTruthy();
  });
})