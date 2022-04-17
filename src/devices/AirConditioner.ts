import { Device } from './Device';
import { Signals } from '../constants';
import { IDevice } from '../types';

const decreaseValue = 10;
const increaseValue = 13;

export class AirConditioner extends Device implements IDevice {
  private turnedOff: boolean = false;

  private temperature: number = 22;

  private decreaseTemperature(): void {
    this.checkOff();
    this.temperature -= decreaseValue;
    console.log(`Temperature of ${this.name} decreased by ${decreaseValue} to value ${this.temperature}`);
  }

  private increaseTemperature(): void {
    this.checkOff();
    this.temperature += increaseValue;
    console.log(`Temperature of ${this.name} decreased by ${increaseValue} to value ${this.temperature}`);
  }

  private turnOff(): void {
    if (this.turnedOff) {
      console.log(`Device ${this.name} is already off`);
      return;
    }
    this.turnedOff = true;
    console.log(`Device ${this.name} turned off`);
  }

  private checkOff(): void {
    console.log(`Checking Device ${this.name} whether it turns off or not`);
    if (this.turnedOff) {
      this.turnedOff = false;
      console.log(`Device ${this.name} was turned off, now it works`);
    } else {
      console.log(`Device ${this.name} works continue`);
    }
  }

  public process(signal: string): void {
    switch (signal) {
      case Signals.cold:
        this.increaseTemperature();
        break;
      case Signals.hot:
        this.decreaseTemperature();
        break;
      case Signals.normal:
        this.turnOff();
        break;
      default:
    }
  }
}
