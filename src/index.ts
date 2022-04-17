import * as dotenv from 'dotenv';
dotenv.config();

import { API } from './API';
import { DeviceFactory } from './devices/DeviceFactory';
import { Devices, Signals } from './constants';
import { IDevice } from './types';

class Controller {
  private devices: Array<IDevice> = [];

  constructor() {
    const airConditioner1 = DeviceFactory.createEntity(Devices.airConditioner, 'AirConditioner John');
    const switch1 = DeviceFactory.createEntity(Devices.switch, 'Switch Mike');
    const waterHeater1 = DeviceFactory.createEntity(Devices.waterHeater, 'WaterHeater Smith');

    this.devices = [
      airConditioner1,
      switch1,
      waterHeater1,
    ];
  }

  async process(): Promise<void> {
    const signal = await this.getSignal();
    console.log(`signal is ${signal}`);
    this.devices.forEach((device: IDevice) => {
      device.process(signal);
    });
  }

  async run(): Promise<void> {
    await this.process();
    setInterval(async () => {
      await this.process();
    }, 1000 * 60);
  }

  async getSignal(): Promise<string> {
    const temperature = await API.getTemperature();
    if (!temperature) {
      return;
    }
    console.log(temperature);
    if (temperature > 30) {
      return Signals.hot;
    }
    if (temperature < 15) {
      return Signals.cold;
    }
    return Signals.normal;
  }
}

const controller = new Controller();
controller.run();
