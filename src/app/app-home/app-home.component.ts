import { Component } from '@angular/core';
import { IWeather } from '../model/IWeather';
import { WeatherService } from '../services/weatherService/weather.service';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css'],
})
export class AppHomeComponent {

  /**
   * Weather data
   */
  public WeatherData?: IWeather;

  public cityName!: string;

  /**
   * constructor
   * @param weatherService
   */
  constructor(private readonly weatherService: WeatherService) {}

  /**
   *
   * @param city
   */
  public getWeatherReport(): void {
    this.weatherService.getWeatherData(this.cityName).subscribe((res: IWeather) => {
      this.WeatherData = res;
      console.log(res);
      
    });
  }
}
