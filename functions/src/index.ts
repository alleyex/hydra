import { PublicRadioSystem } from './external/traffic';
import { CentralWeatherBureau} from './external/weather';

export const traffic = PublicRadioSystem.bulletin;
export const weather = CentralWeatherBureau.status;