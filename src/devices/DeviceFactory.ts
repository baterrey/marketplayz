import { Switch } from './Switch';

import { Devices } from '../constants';
import { AirConditioner } from './AirConditioner';
import { WaterHeater } from './WaterHeater';
import { IDevice } from '../types';

export class DeviceFactory {
  public static createEntity(type: Devices, name: string): IDevice | null {
    switch (type) {
      case Devices.switch:
        return new Switch(name);
      case Devices.airConditioner:
        return new AirConditioner(name);
      case Devices.waterHeater:
        return new WaterHeater(name);
      default:
    }
    return null;
  }
}
