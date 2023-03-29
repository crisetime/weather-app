import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWeather } from 'src/app/model/IWeather';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  /**
   *
   * @param http
   */
  constructor(public readonly http: HttpClient) {}

  /**
   * get Weather Data
   * @param city 
   * @returns 
   */
  public getWeatherData(city: string): Observable<IWeather> {
    return this.http.get<IWeather>(environment.weatherApiUrl, {
      headers: new HttpHeaders()
        .set(
          environment.xRapidHostHeaderLabel,
          environment.xRapidHostHeaderValue
        )
        .set(
          environment.xRapidAPIHeaderLabel,
          environment.xRapidAPIHeaderValue
        ),
      params: new HttpParams().set('q', city),
    });
  }
}
