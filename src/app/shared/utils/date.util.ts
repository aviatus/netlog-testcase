import moment from 'moment';

export class DateUtil {

  /**
  * Transform date to YYYY-MM-DD format
  * @param date The date value to transform.
  * @returns The transformed date string.
  */
  static formatDateToYYYYMMDD(date: Date) {
    return moment(date).format('YYYY-MM-DD');
  }
}
