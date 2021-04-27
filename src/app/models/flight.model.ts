export interface ISearchFlightFilters {
    DepartureAirportCode: string;
    ArrivalAirportCode: string;
    DepartureDate:string;
    ReturnDate: string;
}

export interface ISearchFlightResults {
    AirlineLogoAddress: string;
    AirlineName: string;
    InboundFlightsDuration: string;
    ItineraryId: string;
    OutboundFlightsDuration: string;
    Stops: number;
    TotalAmount: number;
}