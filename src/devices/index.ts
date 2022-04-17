import { Switch } from './switch';

import { Devices } from '../constants';
import { AirConditioner } from './airConditioner';

export class DeviceFactory {
  public createEntity(type: Devices, name: string) {
    switch (type) {
      case Devices.switch:
        return new Switch(name);
      case Devices.airConditioner:
        return new AirConditioner();
      default:
    }
  }
}
