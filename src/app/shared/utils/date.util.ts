import moment from 'moment';

export class DateUtil {
  static setDateToString(date: Date) {
    return moment(date).format('YYYY-MM-DD');
  }
}
