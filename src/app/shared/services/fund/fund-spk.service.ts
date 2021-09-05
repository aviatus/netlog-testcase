import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DateUtil } from '@shared/utils';

import { FundService } from './fund.service';

@Injectable()
export class FundSpkService implements FundService {
  url = 'https://ws.spk.gov.tr/PortfolioValues/api';

  constructor(private http: HttpClient) { }

  getFunds(type: string): Observable<Object> {
    return this.http.get(this.url + '/Funds/' + type);
  }

  getFundHistory(fundCode: string, fundType: string, startDate: Date, endDate: Date) {
    return this.http.get(this.url + '/PortfoyDegerleri/' + fundCode + '/' + fundType + '/' +
      DateUtil.setDateToString(startDate) + '/' + DateUtil.setDateToString(endDate));
  }
}
