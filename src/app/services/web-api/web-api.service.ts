import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { of } from "rxjs/internal/observable/of";

@Injectable()
export class WebApiService {

	constructor(private _http: HttpClient) {}

	public get<T>(
		api: string,
		useBaseUrl = true,
		extraHeaders?: { [key: string]: any }
	): Observable<T> {
		let httpOptions: { headers: any };
		if (extraHeaders) {
			const headers = new HttpHeaders(extraHeaders);
			httpOptions = {
				headers: headers
			};
		}

		return this._http
			.get<T>(this.getUrl(api, useBaseUrl), httpOptions)
			.pipe(
				catchError(
					(errorResponse: any, caught: Observable<any>) => {
						console.error("catch an error in get call");
						return this.errorHandler(errorResponse);
					}
				)
			);
    }
    
    private getUrl(url: string, useBaseUrl = true): string {
        return useBaseUrl ? environment.apiHost + url : url; 
    }

	private errorHandler(apiError) {
        // we can do logging in case we have any logging servie available
		return of('');
	}
}
