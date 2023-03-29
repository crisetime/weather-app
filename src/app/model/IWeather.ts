import { ICurrent } from "./ICurrent";
import { ILocation } from "./ILocation";

export interface IWeather {
  location: ILocation;
  current: ICurrent;
}
