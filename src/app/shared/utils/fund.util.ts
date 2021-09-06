import moment from 'moment';

import { FundHistoryModel } from '@shared/models';

export interface FundGroupModel {
  [week: number]: FundHistoryModel[];
}

export class FundUtil {

  /**
  * Group fund histroy model data to fund group model
  * @param funds The fund histroy model array.
  * @param period The time period for group process
  * @returns Funds array for weeks
  */
  static setFundGroupByPeriod(funds: FundHistoryModel[], period: string): FundGroupModel {
    return funds.reduce((fundGroup, fund) => ({
      ...fundGroup,
      [moment(fund.Tarih).format(period)]: [...(fundGroup[moment(fund.Tarih).format(period)] || []), fund]
    }), {});
  }
}
