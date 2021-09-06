import { Observable } from 'rxjs/internal/Observable';

export abstract class FundService {
  abstract getFunds(type: string): Observable<object>;
  abstract getFundHistory(fundCode: string, fundType: string, startDate: Date, endDate: Date): Observable<any>;
}
