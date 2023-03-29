import { ICurrent } from './ICurrent';
import { ILocation } from './ILocation';
import { IWeather } from './IWeather';

export class Weather implements IWeather {
  constructor(public location: ILocation, public current: ICurrent) {}
}
