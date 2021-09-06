
import { Observable } from 'rxjs/internal/Observable';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DateUtil } from '@shared/utils';

import { FundService } from './fund.service';

@Injectable()
export class FundSpkService implements FundService {
  url = 'https://ws.spk.gov.tr/PortfolioValues/api';

  constructor(private http: HttpClient) { }
  /**
  * Get funds for fun type
  * @param type The type of fund.
  * @returns The filtered funds for fund type
  */
  getFunds(type: string): Observable<object> {
    return this.http.get(this.url + '/Funds/' + type);
  }

  /**
  * Get fund history data for filter.
  * @param fundCode Selected fund code.
  * @param fundType Selected fund type.
  * @param startDate Start date filter.
  * @param endDate End date filter.
  * @returns Fund history date.
  */
  getFundHistory(fundCode: string, fundType: string, startDate: Date, endDate: Date): Observable<object> {
    return this.http.get(this.url + '/PortfoyDegerleri/' + fundCode + '/' + fundType + '/' +
      DateUtil.formatDateToYYYYMMDD(startDate) + '/' + DateUtil.formatDateToYYYYMMDD(endDate));
  }
}
