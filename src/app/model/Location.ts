import { ILocation } from "./ILocation";

export class Location implements ILocation {
  constructor(
    public name: string,
    public region: string,
    public country: string,
    public lat: number,
    public lon: number,
    public tz_id: string,
    public localtime_epoch: number,
    public localtime: string
  ) {}
}
