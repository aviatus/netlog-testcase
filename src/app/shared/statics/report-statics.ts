import { DropdownModel } from '../models/dropdown.model';

export class ReportStatics {
  static FUND_DROPDOWN_TYPES: Array<DropdownModel> = [
    {
      uniqueId: '1',
      renderText: 'Menkul Kıymet Yatırım Fonları'
    },
    {
      uniqueId: '2',
      renderText: 'Emeklilik Yatırım Fonları'
    },
    {
      uniqueId: '3',
      renderText: 'Menkul Kıymet Yatırım Ortaklıkları'
    },
    {
      uniqueId: '4',
      renderText: 'Tüm Yatırım Fonları'
    },
    {
      uniqueId: '7',
      renderText: 'Gayrimenukul Yatırım Ortaklıkları'
    },
    {
      uniqueId: '8',
      renderText: 'Risk Sermayesi Yatırım Ortaklıkları'
    },
  ];

  static REPORT_TIME_RANGE_TYPES: Array<DropdownModel> = [
    {
      uniqueId: 'daily',
      renderText: 'Günlük'
    },
    {
      uniqueId: 'weekly',
      renderText: 'Haftalık'
    },
    {
      uniqueId: 'monthly',
      renderText: 'Aylık'
    }
  ]
}