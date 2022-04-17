import Axios from 'axios';

const { API_KEY } = process.env;

export class API {
  static async getTemperature(): Promise<number | boolean> {
    try {
      const res = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=${API_KEY}&units=metric`);
      return res.data.main.temp;
    } catch (e) {
      console.log('Error occured while obtaining data from API. process wouldn\'t be running');
    }
    return false;
  }
}
