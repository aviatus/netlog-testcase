import { Observable } from 'rxjs';

export abstract class FundService {
  abstract getFunds(type: string): Observable<Object>;
  abstract getFundHistory(fundCode: string, fundType: string, startDate: Date, endDate: Date): Observable<any>;
}
