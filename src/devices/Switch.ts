import { Device } from './Device';

import { Signals } from '../constants';
import { IDevice } from '../types';

export class Switch extends Device implements IDevice {
  private lights = '';

  private turnLightOn(): void {
    this.lights = 'On';
    console.log(`Turning light ${this.lights}. Device name: ${this.name}`);
  }

  private turnLightOff(): void {
    this.lights = 'Off';
    console.log(`Turning light ${this.lights}. Device name: ${this.name}`);
  }

  public process(signal: string): void {
    switch (signal) {
      case Signals.cold:
        this.turnLightOn();
        break;
      case Signals.hot:
        this.turnLightOff();
        break;
      default:
    }
  }
}
