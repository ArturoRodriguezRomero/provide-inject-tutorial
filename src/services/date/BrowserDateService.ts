import { DateService } from './DateService';

export class BrowserDateService implements DateService {
  getDate(): Date {
    return new Date();
  }
}
