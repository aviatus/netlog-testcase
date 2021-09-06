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

  static REPORT_TIME_PERIOD_DAILY = 'daily';
  static REPORT_TIME_PERIOD_WEEKLY = 'weekly';
  static REPORT_TIME_PERIOD_MONTHLY = 'monthly';
  static REPORT_TIME_PERIOD_DROPDOWN_TYPES: Array<DropdownModel> = [
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
  ];

  static REPORT_CHART_VIEW_FEATURES = ['BankaBonosu', 'Diger', 'DevletTahvili', 'DovizOdemeliBono', 'DovizOdemeliTahvil', 'Eurobond',
    'FonKatilmaBelgesi', 'GayrimenkulSertifikasi', 'HazineBonosu', 'KamuDisBorclanmaAraci', 'KamuKiraSertifikasi', 'KatilimHesabi',
    'KiymetliMaden', 'OzelSektorKiraSertifikasi', 'TurevAraci', 'VarligaDayaliMenkulKiymet', 'VadeliMevduat', 'YabanciBorclanmaAraci',
    'YabanciHisseSenedi', 'YabanciMenkulKiymet'];

}
