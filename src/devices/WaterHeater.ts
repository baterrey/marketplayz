import { Device } from './Device';
import { Signals, hourWhenOwnerComes } from '../constants';
import { IDevice } from '../types';

const minutesToBoil = 25;

export class WaterHeater extends Device implements IDevice {
  private turnOn(minutes) {
    console.log(`WaterHeater ${this.name} turned on for ${minutes} minutes`);
    setTimeout(() => {
      console.log(`WaterHeater ${this.name} turned off`);
    }, minutes * 1000 * 60);
  }

  public process(signal: string): void {
    const currentHour: number = new Date().getHours();
    if (hourWhenOwnerComes - currentHour !== 1) {
      console.log(`no one comes in an hour, skip boiling of WaterHeater ${this.name}`);
      return;
    }
    switch (signal) {
      case Signals.cold:
        this.turnOn(minutesToBoil);
        break;
      default:
    }
  }
}
